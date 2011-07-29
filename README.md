This Git repository includes all of the source code used in creating a tutorial about tabs and toolbars in Sencha Touch.

The tutorial includes several checkpoints:

* [Blank slate][00]
* [Create user interface using bottom-docked tab bar][01] ([view diff][00-01])
* [Break each card out into it's own file][02] ([view diff][01-02])
* [Specialize the behavior for individual cards][03] ([view diff][02-03])
* [Add a toolbar with title to each card][04] ([view diff][03-04])
* [Add 'ping' and 'clear' buttons, which update badge text on home tab button][05] ([view diff][04-05])
* [Demonstrate different styles of text buttons][06] ([view diff][05-06])
* [Demonstrate how to use an icon in a button][07] ([view diff][06-07])
* [Tidy up][08] ([view diff][07-08])

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

* [http://senchalearn.github.com/Tabs-and-toolbars-demo/][t]

[t]: http://senchalearn.github.com/Tabs-and-toolbars-demo/

[00]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/00_blank_slate
[01]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/01_create_bottom_tabs
[02]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/02_make_each_card_a_view
[03]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/03_make_each_card_specialize
[04]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/04_add_a_toolbar_to_each_card
[05]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/05_add_buttons_to_top_toolbar
[06]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/06_create_text_buttons
[07]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/07_create_icon_buttons
[08]: https://github.com/senchalearn/Tabs-and-toolbars-demo/tree/08_refactor_complex_types

[00-01]: https://github.com/senchalearn/Tabs-and-toolbars-demo/compare/00_blank_slate...01_create_bottom_tabs
[01-02]: https://github.com/senchalearn/Tabs-and-toolbars-demo/compare/01_create_bottom_tabs...02_make_each_card_a_view
[02-03]: https://github.com/senchalearn/Tabs-and-toolbars-demo/compare/02_make_each_card_a_view...03_make_each_card_specialize
[03-04]: https://github.com/senchalearn/Tabs-and-toolbars-demo/compare/03_make_each_card_specialize...04_add_a_toolbar_to_each_card
[04-05]: https://github.com/senchalearn/Tabs-and-toolbars-demo/compare/04_add_a_toolbar_to_each_card...05_add_buttons_to_top_toolbar
[05-06]: https://github.com/senchalearn/Tabs-and-toolbars-demo/compare/05_add_buttons_to_top_toolbar...06_create_text_buttons
[06-07]: https://github.com/senchalearn/Tabs-and-toolbars-demo/compare/06_create_text_buttons...07_create_icon_buttons
[07-08]: https://github.com/senchalearn/Tabs-and-toolbars-demo/compare/07_create_icon_buttons...08_refactor_complex_types
