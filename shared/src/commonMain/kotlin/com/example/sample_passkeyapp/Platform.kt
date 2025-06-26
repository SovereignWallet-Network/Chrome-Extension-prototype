package com.example.sample_passkeyapp

interface Platform {
    val name: String
}

expect fun getPlatform(): Platform