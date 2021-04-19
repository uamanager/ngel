module.exports = {
  name: 'ngel-cdk-wrapper',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cdk/wrapper',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
