<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SqliteCreateCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sqlite:create';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Create Empty SQLite Database';

    /**
     * Create a new command instance.
     *
     * @return void
     */
    public function __construct()
    {
        parent::__construct();
    }

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        if (file_exists(database_path('database.sqlite'))) {
            return $this->error('The database.sqlite file exists.');
        }

        $this->laravel->make('files')->put(
            database_path('database.sqlite'), ''
        );

        $this->info('The database.sqlite file has been created.');
    }
}