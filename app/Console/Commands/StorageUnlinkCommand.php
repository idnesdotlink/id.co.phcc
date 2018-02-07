<?php

namespace App\Console\Commands;

use Illuminate\Console\Command;

class StorageUnlinkCommand extends Command
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'storage:unlink';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Delete symbolic link from "public/storage" to "storage/app/public"';

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
        /**
    if (!file_exists(public_path('storage'))) {
            return $this->error('The "public/storage" directory doesnt exists.');
        }
    */
        $this->laravel->make('files')->delete(
            public_path('storage')
        );

        $this->info('The [public/storage] directory has been removed.');
    }
}
