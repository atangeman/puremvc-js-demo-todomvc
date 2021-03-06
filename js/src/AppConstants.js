/**
 * 
 * @author Andrew Tangeman, Mike Britton
 * @class AppConstants
 * @link https://github.com/PureMVC/puremvc-js-demo-todomvc.git
 *
 * Define the core and notification constants.
 * 
 * PureMVC JS is multi-core, meaning you may have multiple,
 * named and isolated PureMVC cores. This app only has one.
 */
puremvc.define({ name: 'todomvc.AppConstants' },{}, {
        // The multiton key for this app's single core
        CORE_NAME:                'TodoMVC',
        
        // Notifications 
        STARTUP:                  'startup',
        FILTER_TODOS:             'filter_todos',
        TODOS_FILTERED:           'todos_filtered',
        GET_REPOS:                 'get_repos',
        GET_HOME:                  'get_home',
        GET_MARKDOWN:              'get_markdown',
        REPOS_LOADED:              'repos_loaded',
        GET_README:                'get_readme',
        README_CALLBACK:           'readme_callback',
        MARKDOWN_CALLBACK:           'markdown_callback',
        // Filter routes
        FILTER_ALL:                'all',
        FILTER_ACTIVE:             'active',
        FILTER_COMPLETED:          'completed'
    }
);
