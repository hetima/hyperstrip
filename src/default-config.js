export default {
    statusBar: {
        // background color
        background: 'rgba(0, 0, 0, 0.1)',

        // foreground color list.
        // adding to the list can colorize separately per items
        colors: ["#fff"],

        // font
        fontSize: '14px',
        fontFamily: 'Consolas, Menlo, "Lucida Console", monospace',

        // height of status bar. don't forget adjust the terminal frame at 'padding'.
        height: '28px',
        
        // spacing between plugins
        itemPadding: '10px',

        //ordered plugins what you use.
        plugins: [
            "helloworld",
        ]
    }
}
