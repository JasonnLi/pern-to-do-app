import * as pulumi from "@pulumi/pulumi";
import * as aws from "@pulumi/aws";
import * as awsx from "@pulumi/awsx";

// Create an AWS resource (S3 Bucket)
const bucket = new aws.s3.Bucket("my-bucket");

// Export the name of the bucket
export const bucketName = bucket.id;

// const baseTags = {
//     Project: "Infra",
//     PulumiStack: pulumi.getStack()
// };
  
// //

// const config = new pulumi.Config();
// const webAddress = config.require("webAddress");

// const infraStack = new pulumi.StackReference("stackref-infra", {
//   name: `/elixar-infra/${baseTags.PulumiStack}`
// });
