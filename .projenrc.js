const { awscdk } = require('projen');
const { ReleaseTrigger } = require('projen/lib/release');
const project = new awscdk.AwsCdkConstructLibrary({
  author: 'andreaangiolillo',
  authorAddress: 'andrea.angiolillo@mongodb.com',
  cdkVersion: '2.1.0',
  defaultReleaseBranch: 'main',
  name: '@andreaangiolillo/cdk-test2',
  repositoryUrl: 'https://github.com/andrea.angiolillo/cdk-test.git',
  majorVersion: 1,
  releaseToNpm: true,
  npmAccess: 'public',
  releaseTrigger: ReleaseTrigger.manual(),
  docgen: true,
  sampleCode: false,

  publishToNuget: {
    dotNetNamespace: 'andreaangiolillo.cdk.test2',
    packageId: 'andreaangiolillo.cdk.test2',
  },

  // publishToMaven: {
  //   javaPackage: 'org.projen',
  // },
  githubOptions: { workflows: false },

  publishToPypi: {
    distName: 'cfn-test2',
    module: 'cfn-test2',
  },

  publishToGo: {
    moduleName: 'github.com/andreaangiolillo/cfn-test2-go',
  },

  keywords: ['cdk',
    'awscdk',
    'aws-cdk',
    'cloudformation',
    'cfn',
    'extensions',
    'constructs',
    'cfn-resources',
    'cloudformation-registry',
    'l1',
    'atlas'],
  testDeps: ['@aws-cdk/assert'],
  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // devDeps: [],             /* Build dependencies for this module. */
  // packageName: undefined,  /* The "name" in package.json. */
});
project.synth();