package com.example.simalkireddy.pptest;

import android.support.v7.app.AppCompatActivity;
import android.os.Bundle;

import android.webkit.WebView;
import android.widget.RelativeLayout;

public class MainActivity extends AppCompatActivity {

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        final RelativeLayout layout = new RelativeLayout(this);

        final WebView w = new WebView(this);
        w.setLayoutParams(new RelativeLayout.LayoutParams(RelativeLayout.LayoutParams.MATCH_PARENT, RelativeLayout.LayoutParams.MATCH_PARENT));
        layout.addView(w);

        w.getSettings().setJavaScriptEnabled(true);

        w.loadUrl("http://10.0.0.105:3002/");

        // hide action bar aka title bar just cuz!
        try {
            this.getSupportActionBar().hide();
        } catch (NullPointerException e) {
        }

        // set the content of the to the Rootview
        setContentView(layout);
    }

}