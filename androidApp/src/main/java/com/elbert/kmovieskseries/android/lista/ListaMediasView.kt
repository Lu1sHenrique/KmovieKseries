package com.elbert.kmovieskseries.android.lista

import androidx.compose.foundation.layout.Column
import androidx.compose.runtime.Composable
import androidx.compose.ui.tooling.preview.Preview
import com.elbert.kmovieskseries.android.MyApplicationTheme
import com.elbert.kmovieskseries.android.search.SearchScreen

@Composable
fun ListaMediaView() {
    Column {
        SearchScreen()
    }
}

@Preview
@Composable
fun DefaultPreview() {
    MyApplicationTheme {
        ListaMediaView()
    }
}