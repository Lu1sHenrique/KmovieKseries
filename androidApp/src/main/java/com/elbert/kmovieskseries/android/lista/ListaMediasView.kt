package com.elbert.kmovieskseries.android.lista

import androidx.compose.material.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.elbert.kmovieskseries.android.MyApplicationTheme
@Composable
fun ListaMediaView(text: String) {
    Text(text = text)
}

@Preview
@Composable
fun DefaultPreview() {
    MyApplicationTheme {
        ListaMediaView("Hello, Android!")
    }
}