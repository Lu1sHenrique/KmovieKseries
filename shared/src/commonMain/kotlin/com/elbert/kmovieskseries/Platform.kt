package com.elbert.kmovieskseries

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform