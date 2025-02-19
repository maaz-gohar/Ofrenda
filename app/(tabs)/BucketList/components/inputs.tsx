import React, { useState, useRef } from 'react';
import {
    StyleSheet,
    View,
    Text,
    Modal,
    TouchableOpacity,
    TouchableWithoutFeedback,
    TextInput,
} from 'react-native';
import { useRouter } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function Inputs() {
    const router = useRouter();
    const [noteText, setNoteText] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);
    const [listType, setListType] = useState('none'); // 'none', 'bullet', 'number'
    const [currentNumber, setCurrentNumber] = useState(1);
    const [lastLineWasEmpty, setLastLineWasEmpty] = useState(false);
    const selection = useRef({ start: 0, end: 0 });
    const textInputRef = useRef(null);

    const handleSelectionChange = (event) => {
        selection.current = event.nativeEvent.selection;
    };

    const handleNoteChange = (text: string) => {
        const lines = text.split('\n');
        const currentLine = lines[lines.length - 1] || '';

        // Handle backspace
        if (noteText.length > text.length) {
            if (currentLine === '' || currentLine === '• ' || currentLine.match(/^\d+\.\s*$/)) {
                const newLines = lines.slice(0, -1);
                setNoteText(newLines.join('\n'));
                if (listType === 'number') {
                    setCurrentNumber(prev => Math.max(prev - 1, 1));
                }
                return;
            }
        }

        // Handle enter key
        if (text.endsWith('\n')) {
            if (currentLine.trim() === '') {
                if (lastLineWasEmpty) {
                    // Two consecutive empty lines - exit list mode
                    setListType('none');
                    setCurrentNumber(1);
                    setLastLineWasEmpty(false);
                    return;
                }
                setLastLineWasEmpty(true);
            } else {
                setLastLineWasEmpty(false);
            }

            // Add new list item only if the current line has text
            if (listType !== 'none' && !lastLineWasEmpty) {
                if (listType === 'number' && currentLine.match(/^\d+\.\s*$/)) {
                    // If the current line is just a number (e.g., "5. "), skip adding the next number
                    setNoteText(text);
                    return;
                }

                const newLine = listType === 'bullet' ? '• ' : `${currentNumber}. `;
                setNoteText(text + newLine);
                if (listType === 'number') {
                    setCurrentNumber(prev => prev + 1);
                }
                return;
            }

            // Handle the transition back to normal text
            if (listType === 'number' && currentLine.match(/^\d+\.\s.*$/)) {
                // Remove the number and go back to normal text
                const newText = lines.slice(0, -1).join('\n') + '\n';
                setNoteText(newText);
                setListType('none');
                setCurrentNumber(1);
                return;
            } else if (listType === 'bullet' && currentLine.startsWith('• ')) {
                // Remove the bullet and go back to normal text
                const newText = lines.slice(0, -1).join('\n') + '\n';
                setNoteText(newText);
                setListType('none');
                return;
            }
        } else {
            setLastLineWasEmpty(false);
        }

        // Auto-detect list type from current line
        if (currentLine.match(/^\d+\.\s/)) {
            setListType('number');
            const match = currentLine.match(/^(\d+)\.\s/);
            setCurrentNumber(match ? parseInt(match[1]) + 1 : 2);
        } else if (currentLine.startsWith('• ')) {
            setListType('bullet');
        }

        setNoteText(text);
    };

    const convertSelectedTextToList = (type: 'bullet' | 'number') => {
        const start = selection.current.start;
        const end = selection.current.end;

        if (start === end) {
            if (type === 'bullet') {
                handleBulletList();
            } else {
                handleNumberedList();
            }
            return;
        }

        const beforeSelection = noteText.substring(0, start);
        const selectedText = noteText.substring(start, end);
        const afterSelection = noteText.substring(end);

        const selectedLines = selectedText.split('\n');
        let convertedLines;

        if (type === 'bullet') {
            convertedLines = selectedLines.map(line =>
                line.trim() ? `• ${line.trim()}` : line
            );
        } else {
            let number = 1;
            convertedLines = selectedLines.map(line =>
                line.trim() ? `${number++}. ${line.trim()}` : line
            );
        }

        const newText = beforeSelection + convertedLines.join('\n') + afterSelection;
        setNoteText(newText);
    };

    const handleBulletList = () => {
        setListType('bullet');
        setCurrentNumber(1);
        setVisibleModal(false);

        if (selection.current.start !== selection.current.end) {
            convertSelectedTextToList('bullet');
            return;
        }

        const lines = noteText.split('\n');
        const lastLine = lines[lines.length - 1];

        if (lastLine && !lastLine.startsWith('• ') && !lastLine.match(/^\d+\./)) {
            setNoteText(noteText + '\n• ');
        } else if (!noteText) {
            setNoteText('• ');
        }
    };

    const handleNumberedList = () => {
        setListType('number');
        setCurrentNumber(1);
        setVisibleModal(false);

        if (selection.current.start !== selection.current.end) {
            convertSelectedTextToList('number');
            return;
        }

        const lines = noteText.split('\n');
        const lastLine = lines[lines.length - 1];

        if (lastLine && !lastLine.startsWith('• ') && !lastLine.match(/^\d+\./)) {
            setNoteText(noteText + '\n1. ');
            setCurrentNumber(2);
        } else if (!noteText) {
            setNoteText('1. ');
            setCurrentNumber(2);
        }
    };

    return (
        <View style={styles.container}>
            <TextInput
                placeholder='Title'
                placeholderTextColor={"#000"}
                style={styles.input1}
            />

            <View style={styles.separator} />
            <TextInput
                ref={textInputRef}
                placeholder='Note'
                placeholderTextColor={"#000"}
                style={styles.input}
                multiline
                value={noteText}
                onChangeText={handleNoteChange}
                onSelectionChange={handleSelectionChange}
            />

            <TouchableOpacity
                style={styles.formatButton}
                onPress={() => setVisibleModal(true)}
            >
                <Ionicons name="list" size={24} color="black" />
            </TouchableOpacity>

            <Modal
                animationType="slide"
                transparent={true}
                visible={visibleModal}
                onRequestClose={() => setVisibleModal(false)}
            >
                <TouchableWithoutFeedback onPress={() => setVisibleModal(false)}>
                    <View style={styles.modalContainer}>
                        <TouchableWithoutFeedback>
                            <View style={styles.modalContent}>
                                <Text style={styles.modalTitle}>Select List Type</Text>
                                <TouchableOpacity style={styles.option} onPress={handleBulletList}>
                                    <Ionicons name="ellipse" size={24} color="black" />
                                    <Text style={styles.optionText}>Bullet Points</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.option} onPress={handleNumberedList}>
                                    <Ionicons name="list" size={24} color="black" />
                                    <Text style={styles.optionText}>Numbered List</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
        width: "100%",
        position: 'relative'
    },
    input: {
        height: 380,
        paddingHorizontal: 10,
        fontSize: 16,
        textAlignVertical: 'top',
        minHeight: 100
    },
    input1: {
        height: 50,
        paddingHorizontal: 10,
        fontSize: 22,
    },
    separator: {
        height: 1,
        backgroundColor: '#000',
        width: '100%',
    },
    formatButton: {
        position: 'absolute',
        left: 30,
        bottom: 20,
        padding: 10,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
    },
    modalContent: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
    },
    modalTitle: {
        fontSize: 18,
        fontWeight: "bold",
        marginBottom: 20,
    },
    option: {
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: 10,
        width: "100%",
    },
    optionText: {
        fontSize: 16,
        marginLeft: 10,
    },
});
