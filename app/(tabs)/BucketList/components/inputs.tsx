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
import { useRouter, useLocalSearchParams } from 'expo-router';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import MainButton from '../../components/button';

const b1 = "rgba(188, 97, 213, 0.8)";
const b2 = "rgba(249, 244, 251, 1)";

export default function Inputs() {
    const router = useRouter();
    const params = useLocalSearchParams();
    const text = Array.isArray(params.text) ? params.text.join(' ') : params.text || ''; // Ensure text is a string
    const [noteText, setNoteText] = useState('');
    const [visibleModal, setVisibleModal] = useState(false);
    const [listType, setListType] = useState('none'); // 'none', 'bullet', 'number'
    const [currentNumber, setCurrentNumber] = useState(1);
    const [lastLineWasEmpty, setLastLineWasEmpty] = useState(false);
    const selection = useRef({ start: 0, end: 0 });
    const textInputRef = useRef(null);

    const handleSelectionChange = (event:any) => {
        selection.current = event.nativeEvent.selection;
    };

    const handleNoteChange = (text:any) => {
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

                    // Remove the extra number if it exists
                    const newLines = lines.slice(0, -2); // Remove the last two empty lines
                    setNoteText(newLines.join('\n') + '\n');
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

    const convertSelectedTextToList = (type:any) => {
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

    const handleSave = () => {
        // Pass the text and notes to the displayData screen
        router.push({
            pathname: '/BucketList/displayData',
            params: { text, notes: noteText }, // Pass text and notes as query parameters
        });
    };

    return (
        <View style={styles.container}>
            {/* Title Container */}
            <TextInput
                style={styles.titleContainer}
                value={text}
                onChangeText={(newText) => router.setParams({ text: newText })}
                placeholder="Enter Title"
                placeholderTextColor="#000"
            />
                {/* <Text style={styles.titleText}>{text}</Text>
            </View> */}

            <View style={styles.separator} />
            <View style={styles.inputContainer}>
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
            </View>

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
                                    <Ionicons name="list" size={24} color="black" />
                                    <Text style={styles.optionText}>Bullet Points</Text>
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.option} onPress={handleNumberedList}>
                                    <FontAwesome name="list-ol" size={20} color="black" />
                                    <Text style={styles.optionText}>Numbered List</Text>
                                </TouchableOpacity>
                            </View>
                        </TouchableWithoutFeedback>
                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            {/* Save Button */}
            <View style={styles.buttonContainer}>
                <MainButton
                    onPress={handleSave}
                    title="Save Note"
                    gradientColor={[b1, b2]}
                    shadowColor='#f8deff'
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignSelf: "flex-start",
        paddingHorizontal: 20,
        width: "100%",
        position: 'relative',
    },
    titleContainer: {
        paddingVertical: 10,
        fontSize: 18,
        paddingLeft:10,
        fontWeight: '600',
    },
    titleText: {
        fontSize: 18,
        fontWeight: '600',
        paddingLeft: 10,
    },
    inputContainer: {
        flex: 1,
        paddingBottom: 80, // Add padding to avoid overlap with the button
    },
    input: {
        paddingHorizontal: 10,
        fontSize: 16,
        textAlignVertical: 'top',
        flex: 1,
    },
    separator: {
        height: 1,
        backgroundColor: '#000',
        width: '100%',
    },
    formatButton: {
        position: 'absolute',
        right: 30,
        bottom: 80,
    },
    modalContainer: {
        flex: 1,
        justifyContent: "flex-end",
    },
    modalContent: {
        width: "100%",
        backgroundColor: "#fff",
        padding: 20,
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
        alignItems: "center",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
        height: 200,
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
    buttonContainer: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        alignItems: 'center',
        // paddingBottom: 20,
    },
});