package com.elbert.kmovieskseries.android.search

import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.layout.width
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp

@Composable
fun SearchScreen() {
    var searchQuery by remember { mutableStateOf("") }
    SearchView(
        modifier = Modifier
            .width(343.dp)
            .height(50.dp)
            .padding(8.dp),
        onSearch = { query -> searchQuery = query }
    )
}
