module.exports = {
  name: 'ngel-packages-preloader',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/preloader',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
