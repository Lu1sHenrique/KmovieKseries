package com.elbert.kmovieskseries.android.di

import android.app.Application
import com.elbert.kmovieskseries.data.local.DatabaseDriverFactory
import com.elbert.kmovieskseries.data.note.SqlDelightNoteDataSource
import com.elbert.kmovieskseries.data.domain.note.NoteDataSource
import com.elbert.kmovieskseries.database.NoteDatabase
import com.squareup.sqldelight.db.SqlDriver
import dagger.Module
import dagger.Provides
import dagger.hilt.InstallIn
import dagger.hilt.components.SingletonComponent
import javax.inject.Singleton

@Module
@InstallIn(SingletonComponent::class)
object AppModule {

    @Provides
    @Singleton
    fun provideSqlDriver(app: Application): SqlDriver {
        return DatabaseDriverFactory(app).createDriver()
    }

    @Provides
    @Singleton
    fun provideNoteDataSource(driver: SqlDriver): NoteDataSource {
        return SqlDelightNoteDataSource(NoteDatabase(driver))
    }
}