
declare module "mimosa" {

	export interface IConfig {
	    server : IServerConfig;
	    watch: IWatchConfig;
	    isOptimize: bool;
	}

	export interface IServerConfig {
		port : number;
		base : string;
		views : IViewsConfig;
	}

	export interface IViewsConfig {
		path : string;
		extension : string;
		html : bool;
	}

	export interface IWatchConfig {
		compiledDir : string;
	}
}
