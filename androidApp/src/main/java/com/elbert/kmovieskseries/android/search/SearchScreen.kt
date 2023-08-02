package com.elbert.kmovieskseries.android.search

import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier

@Composable
fun SearchScreen() {
    var searchQuery by remember { mutableStateOf("") }
    SearchView(
        modifier = Modifier.fillMaxSize(),
        onSearch = { query -> searchQuery = query }
    )
}
