module.exports = {
  name: 'ngel-stores-mobx',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/mobx',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
