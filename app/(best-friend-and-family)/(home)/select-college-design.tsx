import React from "react";
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { AntDesign } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

import MainText from "../../../components/auth/top-text";
import MainButton from "../../../components/auth/button";
import TabBar from "../../../components/auth/tab-bar";
import Wrapper from "../../../components/auth/wrapper";
import FloatingLabelInput from "../../../components/auth/input";
import DatePickerComponent from "../../../components/dearly-departed/date-picker";

const b1 = "rgba(94, 164, 253, 1)";
const b2 = "rgba(143, 184, 236, 1)";

type FormData = {
  name: string;
  profession: string;
  food: string;
  noteableContribution: string;
  movie: string;
  favFood: string;
  health: string;
  dob: string;
  selectedImage: string;
  facebook: string;
  instagram: string;
  twitter: string;
  tiktok: string;
  dynamicFields: Array<{ title: string; value: string }>;
};

export default function SelectCollegeDesign() {
  const router = useRouter();
  const params = useLocalSearchParams();

  const { control, handleSubmit, watch } = useForm<FormData>({
    defaultValues: {
      name: params.name?.toString() || "",
      profession: params.profession?.toString() || "",
      food: params.food?.toString() || "",
      noteableContribution: params.noteableContribution?.toString() || "",
      movie: params.movie?.toString() || "",
      favFood: params.favFood?.toString() || "",
      health: params.health?.toString() || "",
      dob: params.dob?.toString() || "Enter DOB",
      selectedImage: params.selectedImage?.toString() || "",
      facebook: params.facebook?.toString() || "",
      instagram: params.instagram?.toString() || "",
      twitter: params.twitter?.toString() || "",
      tiktok: params.tiktok?.toString() || "",
      dynamicFields: params.dynamicFields
        ? JSON.parse(params.dynamicFields.toString())
        : [],
    },
  });

  const { fields, append, update } = useFieldArray({
    control,
    name: "dynamicFields",
  });

  const selectedImage = watch("selectedImage");

  const onSubmit = (data: FormData) => {
    router.push({
      pathname: "/best-friend-and-family/successful",
      params: {
        ...data,
        dynamicFields: JSON.stringify(data.dynamicFields),
      },
    });
  };

  const handleUploadImage = () => {
    const data = watch();
    router.push({
      pathname: "/best-friend-and-family/upload-files",
      params: {
        ...data,
        dynamicFields: JSON.stringify(data.dynamicFields),
      },
    });
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView
        contentContainerStyle={styles.scrollViewContainer}
        keyboardShouldPersistTaps="handled"
      >
        <MainText
          title={"Best Friends and Family"}
          showIcon={true}
          setting={true}
          gradientColor={[b1, b2]}
        />
        <Wrapper>
          <Text style={styles.title}>Select Collage Design</Text>

          <FloatingLabelInput
            placeholder="name"
            showLabel={false}
            name="name"
            label="Enter Friend Name"
            control={control}
          />
          <FloatingLabelInput
            name="selectedImage"
            iconName="upload"
            iconType="AntDesign"
            control={control}
            onPress={handleUploadImage}
            placeholder="Upload Picture"
            showLabel={false}
          />

          <Controller
            name="dob"
            control={control}
            render={({ field: { onChange, value } }) => (
              <DatePickerComponent
                placeholder="Enter DOB"
                dob={value}
                onDateChange={onChange}
              />
            )}
          />
          <FloatingLabelInput
            showLabel={false}
            placeholder="Favorite Pastimes"
            name="food"
            label="Favorite Pastimes (Separated by ,)"
            control={control}
          />
          <FloatingLabelInput
            placeholder="profession"
            name="profession"
            label="Profession"
            control={control}
          />
          <FloatingLabelInput
            placeholder="Noteable Contribution"
            name="noteableContribution"
            label="Notable Contributions"
            control={control}
          />
          <FloatingLabelInput
            showLabel={false}
            placeholder="Favorite food"
            name="favFood"
            label="Favorite food, restaurants (Separated by ,)"
            control={control}
          />
          <FloatingLabelInput
            showLabel={false}
            placeholder="Favorite movie"
            name="movie"
            label="Favorite movie, band, book, author"
            control={control}
          />
          <FloatingLabelInput
            showLabel={false}
            placeholder="Favourite Bands"
            name="health"
            label="Favourite Bands"
            control={control}
          />
          <FloatingLabelInput
            showLabel={false}
            placeholder="Enter Facebook URL"
            name="facebook"
            label="Paste Facebook URL"
            iconName="link"
            control={control}
          />
          <FloatingLabelInput
            showLabel={false}
            placeholder="Enter Instagram URL"
            name="instagram"
            label="Paste Instagram URL"
            iconName="link"
            control={control}
          />
          <FloatingLabelInput
            showLabel={false}
            placeholder="Enter Twitter URL"
            name="twitter"
            label="Paste Twitter URL"
            iconName="link"
            control={control}
          />
          <FloatingLabelInput
            showLabel={false}
            placeholder="Enter Tiktok URL"
            name="tiktok"
            label="Paste Tiktok URL"
            iconName="link"
            control={control}
          />

          {fields.map((field, index) => (
            <View key={field.id}>
              <FloatingLabelInput
                name={`dynamicFields.${index}.title`}
                label={`Title ${index + 1}`}
                placeholder={`Enter Title ${index + 1}`}
                control={control}
                showLabel={false}
              />
              <FloatingLabelInput
                name={`dynamicFields.${index}.value`}
                label={`Value ${index + 1}`}
                placeholder={`Enter Value ${index + 1}`}
                control={control}
                showLabel={false}
              />
            </View>
          ))}

          <TouchableOpacity
            onPress={() => append({ title: "", value: "" })}
            style={styles.addFieldButton}
          >
            <View style={styles.buttonContent}>
              <Text style={styles.addFieldText}>Add Another Field</Text>
              <AntDesign name="plus" size={14} color="#858383" />
            </View>
          </TouchableOpacity>

          <MainButton
            title="Add BFF"
            onPress={handleSubmit(onSubmit)}
            gradientColor={[b1, b2]}
            shadowColor="rgba(94, 164, 253, 1)"
          />
        </Wrapper>
      </ScrollView>
      <TabBar />
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  scrollViewContainer: {
    flexGrow: 1,
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "700",
    marginBottom: 10,
  },
  addFieldButton: {
    marginTop: 20,
    padding: 10,
    borderRadius: 250,
    width: "93%",
    borderWidth: 1,
    borderColor: "#b5b5b5",
    height: 47,
    justifyContent: "center",
    alignSelf: "center",
  },
  buttonContent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  addFieldText: {
    color: "#9D9D9D",
    fontWeight: "600",
    marginRight: 5,
  },
});
