const utils = require('nps-utils');

module.exports = {
  scripts: {
    default: 'nps build',
    build: {
      default: 'nps build.dev',

      dev: {
        default: utils.series.nps(
          'build.dev.cdk',
          'build.dev.core',
          'build.dev.packages',
          'build.dev.stores',
          'build.dev.styles',
        ),

        cdk: 'nx build ngel-cdk',

        core: 'nx build ngel-core',

        packages: {
          default: utils.series.nps(
            'build.dev.packages.form',
            'build.dev.packages.preloader',
          ),

          form: 'nx build ngel-packages-form',
          preloader: 'nx build ngel-packages-preloader',
        },
        stores: {
          default: utils.series.nps(
            'build.dev.stores.mobx',
            'build.dev.stores.ngrx',
          ),

          mobx: 'nx build ngel-stores-mobx',
          ngrx: 'nx build ngel-stores-ngrx',
        },
        styles: {
          default: utils.series.nps(
            'build.dev.styles.bootstrap',
            'build.dev.styles.material',
          ),

          bootstrap: 'nx build ngel-styles-bootstrap',
          material: 'nx build ngel-styles-material',
        },
      },
      prod: {
        default: utils.series.nps(
          'build.prod.cdk',
          'build.prod.core',
          'build.prod.packages',
          'build.prod.stores',
          'build.prod.styles',
        ),

        cdk: 'nx build ngel-cdk',

        core: 'nx build ngel-core',

        packages: {
          default: utils.series.nps(
            'build.prod.packages.form',
            'build.prod.packages.preloader',
          ),

          form: 'nx build ngel-packages-form',
          preloader: 'nx build ngel-packages-preloader',
        },
        stores: {
          default: utils.series.nps(
            'build.prod.stores.mobx',
            'build.prod.stores.ngrx',
          ),

          mobx: 'nx build ngel-stores-mobx',
          ngrx: 'nx build ngel-stores-ngrx',
        },
        styles: {
          default: utils.series.nps(
            'build.prod.styles.bootstrap',
            'build.prod.styles.material',
          ),

          bootstrap: 'nx build ngel-styles-bootstrap',
          material: 'nx build ngel-styles-material',
        },
      },
    },
    test: {
      default: utils.series.nps(
        'test.lint',
        'test.unit',
      ),
      ci: utils.series.nps(
        'test.lint',
        'test.unit.ci',
      ),

      lint: 'nx workspace-lint && ng lint',
      unit: {
        default: utils.series.nps(
          'test.unit.cdk',
          'test.unit.core',
          'test.unit.packages',
          'test.unit.stores',
          'test.unit.styles',
        ),

        cdk: {
          default: utils.series.nps(
            'test.unit.cdk.element',
            'test.unit.cdk.projection',
            'test.unit.cdk.store',
            'test.unit.cdk.wrapper',
          ),

          element: 'nx test ngel-cdk-element --code-coverage',
          projection: 'nx test ngel-cdk-projection --code-coverage',
          store: 'nx test ngel-cdk-store --code-coverage',
          wrapper: 'nx test ngel-cdk-wrapper --code-coverage',
        },

        core: 'nx test ngel-core --code-coverage',

        packages: {
          default: utils.series.nps(
            'test.unit.packages.form',
            'test.unit.packages.preloader',
          ),

          form: 'nx test ngel-packages-form --code-coverage',
          preloader: 'nx test ngel-packages-preloader --code-coverage',
        },
        stores: {
          default: utils.series.nps(
            'test.unit.stores.mobx',
            'test.unit.stores.ngrx',
          ),

          mobx: 'nx test ngel-stores-mobx --code-coverage',
          ngrx: 'nx test ngel-stores-ngrx --code-coverage',
        },
        styles: {
          default: utils.series.nps(
            'test.unit.styles.bootstrap',
            'test.unit.styles.material',
          ),

          bootstrap: 'nx test ngel-styles-bootstrap --code-coverage',
          material: 'nx test ngel-styles-material --code-coverage',
        },

        ci: {
          default: utils.series.nps(
            'test.unit.ci.cdk',
            'test.unit.ci.core',
            'test.unit.ci.packages',
            'test.unit.ci.stores',
            'test.unit.ci.styles',
          ),

          cdk: {
            default: utils.series.nps(
              'test.unit.ci.cdk.element',
              'test.unit.ci.cdk.projection',
              'test.unit.ci.cdk.store',
              'test.unit.ci.cdk.wrapper',
            ),

            element: 'nx test ngel-cdk-element --code-coverage --ci',
            projection: 'nx test ngel-cdk-projection --code-coverage --ci',
            store: 'nx test ngel-cdk-store --code-coverage --ci',
            wrapper: 'nx test ngel-cdk-wrapper --code-coverage --ci',
          },

          core: 'nx test ngel-core --code-coverage --ci',

          packages: {
            default: utils.series.nps(
              'test.unit.ci.packages.form',
              'test.unit.ci.packages.preloader',
            ),

            form: 'nx test ngel-packages-form --code-coverage --ci',
            preloader: 'nx test ngel-packages-preloader --code-coverage --ci',
          },
          stores: {
            default: utils.series.nps(
              'test.unit.ci.stores.mobx',
              'test.unit.ci.stores.ngrx',
            ),

            mobx: 'nx test ngel-stores-mobx --code-coverage --ci',
            ngrx: 'nx test ngel-stores-ngrx --code-coverage --ci',
          },
          styles: {
            default: utils.series.nps(
              'test.unit.ci.styles.bootstrap',
              'test.unit.ci.styles.material',
            ),

            bootstrap: 'nx test ngel-styles-bootstrap --code-coverage --ci',
            material: 'nx test ngel-styles-material --code-coverage --ci',
          },
        },
      },
    },
    commit: 'git cz -a',
    publish: {
      default: utils.series.nps(
        'publish.cdk',
        'publish.core',
        'publish.packages',
        'publish.stores',
        'publish.styles',
      ),

      cdk: 'cd ./dist/libs/cdk && npm publish',

      core: 'cd ./dist/libs/core && npm publish',

      packages: {
        default: utils.series.nps(
          'publish.packages.form',
          'publish.packages.preloader',
        ),

        form: 'cd ./dist/libs/package-form && npm publish',
        preloader: 'cd ./dist/libs/package-preloader && npm publish',
      },
      stores: {
        default: utils.series.nps(
          'publish.stores.mobx',
          'publish.stores.ngrx',
        ),

        mobx: 'cd ./dist/libs/store-mobx && npm publish',
        ngrx: 'cd ./dist/libs/store-ngrx && npm publish',
      },
      styles: {
        default: utils.series.nps(
          'publish.styles.bootstrap',
          'publish.styles.material',
        ),

        bootstrap: 'cd ./dist/libs/style-bootstrap && npm publish',
        material: 'cd ./dist/libs/style-material && npm publish',
      },
    },
    affected: {
      default: 'nx affected',
      apps: 'nx affected:apps',
      libs: 'nx affected:libs',
      build: 'nx affected:build',
      e2e: 'nx affected:e2e',
      test: 'nx affected:test',
      lint: 'nx affected:lint',
      depGraph: 'nx affected:dep-graph',
    },
    format: {
      default: 'nx format:write',
      write: 'nx format:write',
      check: 'nx format:check',
    },
    update: {
      check: 'ng update',
    },
    workspace: 'nx workspace-schematic',
    depGraph: 'nx dep-graph',
    semanticRelease: 'semantic-release',
  },
};
