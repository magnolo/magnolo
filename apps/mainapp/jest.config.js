module.exports = {
  name: 'mainapp',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/mainapp',
  snapshotSerializers: [
    'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js',
    'jest-preset-angular/build/AngularSnapshotSerializer.js',
    'jest-preset-angular/build/HTMLCommentSerializer.js'
  ]
};
