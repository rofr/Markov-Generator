Markov Text Generator
=====================

Why?
----

Because to understand markov chains I needed to hack something together. And to be honest, it produces some pretty interesting little stories, given the right input.

How?
----

After including json2.js and markov.js in your page...

    var test = new markov(text, type, regex);
  
The text can be anything you so desire.
The type should be "string" or "json".
And the regex should always be global. All matches are used.

Methods
-------

to generate a phrase of a given length:

    test.gen(length); 
  
to see the object containing the data:

    test.data;
  
to get the JSON generated by JSON2.js of the data:

    test.getJson();
  
A warning though, you probably only want to use the JSON for making things a bit faster on the processing end with long text, as the JSON tends to be an order of magnitude greater in file size than the input text.

Copyright
---------

This is all open source, you can use it however you like. Especially to learn.

That said, I would enjoy it if you would send me a sample to work produced by this.

Oh, and JSON2.js isn't mine, the source can be found at http://www.json.org/json2.js