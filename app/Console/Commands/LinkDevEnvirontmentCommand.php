<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class LinkDevEnvirontmentCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'environtment:dev';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Set .env to Development';

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

        $this->laravel->make('files')->delete(
            base_path('.env')
        );

        $this->laravel->make('files')->link(
            base_path('.env'), public_path('.env.' . 'development')
        );

        $this->info('The .env file has been set to' . 'Development.');
    }
}
