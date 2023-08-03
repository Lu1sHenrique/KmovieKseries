package com.elbert.kmovieskseries.android

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.navigation.compose.NavHost
import com.elbert.kmovieskseries.android.lista.ListaMediaView
import androidx.navigation.compose.rememberNavController
import androidx.navigation.compose.composable


class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContent {
            MyApplicationTheme {
                val navController = rememberNavController()
                NavHost(
                    navController = navController, startDestination = "media_list"
                ) {
                    composable(route = "media_list") {
                        ListaMediaView(navController = navController)
                    }
                }
            }
        }
    }
}


