module.exports = {
  name: 'ngel-cdk-element',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/cdk/element',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
