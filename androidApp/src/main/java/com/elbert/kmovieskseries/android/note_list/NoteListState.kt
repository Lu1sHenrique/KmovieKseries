package com.elbert.kmovieskseries.android.note_list

import com.elbert.kmovieskseries.data.domain.note.Note

data class NoteListState(
    val notes: List<Note> = emptyList(),
    val searchText: String = "",
    val isSearchActive: Boolean = false
)
