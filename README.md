This Git repository includes all of the source code used in creating a tutorial about tabs and toolbars in Sencha Touch.

The tutorial includes several checkpoints:

* [Blank slate](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/00_blank_slate)
* [Create user interface using bottom-docked tab bar](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/01_create_bottom_tabs)
* [Break each card out into it's own file](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/02_make_each_card_a_view)
* [Specialize the behavior for individual cards](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/03_make_each_card_specialize)
* [Add a toolbar with title to each card](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/04_add_a_toolbar_to_each_card)
* [Add 'ping' and 'clear' buttons, which update badge text on home tab button](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/05_add_buttons_to_top_toolbar)
* [Demonstrate different styles of text buttons](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/06_create_text_buttons)
* [Demonstrate how to use an icon in a button](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/07_create_icon_buttons)
* [Tidy up](https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/08_refactor_complex_types)

# Using this repository to follow the screencast

First, you'll have to clone this repository:

    git clone git://github.com/senchalearn/Tabs-and-toolbars-demo.git

Change into the directory:

    cd Tabs-and-toolbars-demo

By default, the git clone command will only create the master branch locally. If you want to study the code at each checkpoint, you will have to fetch each of the other branches. You can do so by running the following:

    git checkout -b 00_blank_slate origin/00_blank_slate
    git checkout -b 01_create_bottom_tabs origin/01_create_bottom_tabs
    git checkout -b 02_make_each_card_a_view origin/02_make_each_card_a_view
    git checkout -b 03_make_each_card_specialize origin/03_make_each_card_specialize
    git checkout -b 04_add_a_toolbar_to_each_card origin/04_add_a_toolbar_to_each_card
    git checkout -b 05_add_buttons_to_top_toolbar origin/05_add_buttons_to_top_toolbar
    git checkout -b 06_create_text_buttons origin/06_create_text_buttons
    git checkout -b 07_create_icon_buttons origin/07_create_icon_buttons
    git checkout -b 08_refactor_complex_types origin/08_refactor_complex_types

## Live demo

You can try out the demo here:

* [http://sencha-tabs.heroku.com/][t]

[t]: http://sencha-tabs.heroku.com/
