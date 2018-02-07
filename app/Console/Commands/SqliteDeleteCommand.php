<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class SqliteDeleteCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'sqlite:delete';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete SQLite Database';

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
        if (!file_exists(database_path('database.sqlite'))) {
            return $this->error('The database.sqlite file doesnt exists.');
        }

        $this->laravel->make('files')->delete(
            database_path('database.sqlite')
        );

        $this->info('The database.sqlite file has been removed.');
    }
}