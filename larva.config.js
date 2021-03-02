const path = require( 'path' );
const LARVA_PORT = 3001;

module.exports = {

	eslint: {
		configFile: path.join( __dirname, './scripts/config/.eslintrc.json' )
	},

	webpack: {
		aliases: {
			'@js': path.resolve( './src/js' ),
			'@larva-js': path.resolve( './node_modules/@penskemediacorp/larva-js/src' ),
		},
		entries: {
			'larva-ui': './entries/larva-ui.entry.js',
			common: './entries/common.entry.js'
		}
	},

	backstop: {
		testBaseUrl: 'http://localhost:' + LARVA_PORT + '/larva/__tests__/',
		testScenario: {
			'delay': 1000,
			'misMatchThreshold': 0.5,
		},
		testPaths: [
			'profile',
			'profile-index',
			'vlanding',
			'css'
		],
		backstopConfig: {
			'engineOptions': {
				'args': [ '--no-sandbox', '--proxy-server=127.0.0.1:' + LARVA_PORT, '--proxy-bypass-list=<-loopback>' ],
			}
		}
	},

	patterns: {
		larvaPatternsDir: path.join( __dirname, './packages/larva-patterns' ),
		projectPatternsDir: path.join( __dirname, './src/patterns' ),
	}
};