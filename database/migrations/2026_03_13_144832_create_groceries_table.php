<?php

use App\Models\grocery;
use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('groceries', function (Blueprint $table) {
            $table->id();

            $table->string('item_name');
            $table->integer('quantity')->default(1);

            $table->enum('category', ['produce', 'meat', 'pantry', 'snacks', 'household'])->default('pantry');

            $table->enum('status', ['needed', 'in_cart', 'bought'])->default('needed');

            $table->string('brand_preference')->nullable();

            $table->timestamps();
        });

        $groceryList = [
            [
                'item_name' => 'Bigas (Jasmine)',
                'quantity' => 1,
                'category' => 'pantry',
                'status' => 'needed',
                'brand_preference' => null, 
            ],
            [
                'item_name' => 'Chicken Breast',
                'quantity' => 2,
                'category' => 'meat',
                'status' => 'in_cart',
                'brand_preference' => 'Magnolia',
            ],
            [
                'item_name' => 'Sibuyas (Red)',
                'quantity' => 1,
                'category' => 'produce',
                'status' => 'needed',
                'brand_preference' => null,
            ],
            [
                'item_name' => 'Dishwashing Liquid',
                'quantity' => 1,
                'category' => 'household',
                'status' => 'bought', // Already paid for
                'brand_preference' => 'Joy',
            ],
            [
                'item_name' => 'Potato Chips',
                'quantity' => 3,
                'category' => 'snacks',
                'status' => 'needed',
                'brand_preference' => 'Piattos',
            ]
        ];

        foreach ($groceryList as $item) {
            grocery::create($item);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('groceries');
    }
};
