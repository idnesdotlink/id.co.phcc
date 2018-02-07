<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class LogClearCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'log:clear';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Clear Log';

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
        if (!file_exists(storage_path('logs/laravel.log'))) {
            return $this->error('The Log file doesnt exists.');
        }

        $this->laravel->make('files')->put(
            storage_path('logs/laravel.log'), ''
        );

        $this->info('The Log file has been cleared.');
    }
}
