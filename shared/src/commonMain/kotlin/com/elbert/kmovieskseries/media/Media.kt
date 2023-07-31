package com.elbert.kmovieskseries.media

import com.elbert.kmovieskseries.presentation.BabyBlueHex
import com.elbert.kmovieskseries.presentation.LightGreenHex
import com.elbert.kmovieskseries.presentation.RedOrangeHex
import com.elbert.kmovieskseries.presentation.RedPinkHex
import com.elbert.kmovieskseries.presentation.VioletHex

data class Media(
    val id: Long?,
    val title: String,
    val content: String,
    val colorHex: Long,
) {
    companion object {
        private val colors = listOf(RedOrangeHex, RedPinkHex, LightGreenHex, BabyBlueHex, VioletHex)
        fun generateRandomColor() = colors.random()
    }
}
