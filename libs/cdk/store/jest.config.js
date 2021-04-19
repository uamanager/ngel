module.exports = {
  name: 'ngel-cdk-store',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cdk/store',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
