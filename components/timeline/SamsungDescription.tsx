import { DescriptionItem, DescriptionSection } from "./DescriptionSection";
import TimelineCard from "./TimelineCard";

const descriptions: DescriptionItem[] = [
  {
    product: "Knox Configure Client Android app:",
    description:
      "Knox Configure is a cloud-based service that enables enterprises to configure their company Samsung devices. The Android app works hand in hand with a Portal based web app to configure the customer's devices.",
    techUseditem: {
      tech: "Tech used:",
      techUsed: ["Java", "Knox SDKs"],
    },
  },

  {
    product: "CI/CD pipeline:",
    description:
      'The pipeline for the Android app is used to automate development and testing.',
    techUseditem: {
      tech: "Tech used:",
      techUsed: ["Jenkins", "Sonarqube", "Gradle", "Instrumentation", "Bash"],
    },
  },

  {
    product: "Samsung Algo Challenge:",
    description:
      "Web app that is used to facilitate coding competitions.",
    techUseditem: {
      tech: "Tech used:",
      techUsed: ["AWS Lambda", "AWS S3", "AWS Cognito", "AWS Api Gateway"],
    },
  },

];

export default function SamsungDescription() {
  return (
    <TimelineCard
      date={"2016 September - 2019 May"}
      description={
        "Worked for Samsung Research and Development Philippines as a Software Engineer"
      }
    >
      {descriptions.map((item) => (
        <DescriptionSection descriptionItem={item} key={item.product} />
      ))}
    </TimelineCard>
  );
}
