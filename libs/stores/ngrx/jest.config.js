module.exports = {
  name: 'ngel-stores-ngrx',
  preset: '../../../jest.config.js',
  coverageDirectory: '../../../coverage/libs/ngrx',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js',
  ],
};
