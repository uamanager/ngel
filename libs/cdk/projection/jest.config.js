module.exports = {
  name: 'ngel-cdk-projection',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cdk/projection',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
