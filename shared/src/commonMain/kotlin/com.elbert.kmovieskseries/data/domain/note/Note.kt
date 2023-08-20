package com.elbert.kmovieskseries.data.domain.note

import com.elbert.kmovieskseries.data.presentation.BabyBlueHex
import com.elbert.kmovieskseries.data.presentation.LightGreenHex
import com.elbert.kmovieskseries.data.presentation.RedOrangeHex
import com.elbert.kmovieskseries.data.presentation.RedPinkHex
import com.elbert.kmovieskseries.data.presentation.VioletHex
import kotlinx.datetime.LocalDateTime

data class Note(
    val id: Long?,
    val title: String,
    val content: String,
    val colorHex: Long,
    val created: LocalDateTime
) {
    companion object {
        private val colors = listOf(RedOrangeHex, RedPinkHex, LightGreenHex, BabyBlueHex, VioletHex)

        fun generateRandomColor() = colors.random()
    }
}
