<?php

use App\Models\Order;
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
        Schema::create('orders', function (Blueprint $table) {
            $table->id();
            $table->string('order_number')->unique();
            $table->decimal('total_amount', 10, 2);

            // Enum: Statuses common in PH e-commerce (Lazada/Shopee style)
            $table->enum('status', ['pending', 'processing', 'shipped', 'delivered', 'cancelled'])->default('pending');

            // Required address field
            $table->text('address');

            // Optional: Tracking code for J&T, Flash, or LBC
            $table->string('tracking_code')->nullable();

            $table->timestamps();
        });

        // Batch inserting Philippine-friendly data
        $orders = [
            [
                'order_number' => 'PH-2026-001',
                'total_amount' => 1250.00,
                'status' => 'delivered',
                'address' => 'B12 L4, Camella Homes, Brgy. San Vicente, Santa Rosa, Laguna',
                'tracking_code' => 'JNT-99281102',
            ],
            [
                'order_number' => 'PH-2026-002',
                'total_amount' => 450.75,
                'status' => 'shipped',
                'address' => '15th Floor, GT Tower, Ayala Ave, Makati City, Metro Manila',
                'tracking_code' => 'FLS-PH-7721',
            ],
            [
                'order_number' => 'PH-2026-003',
                'total_amount' => 89.00,
                'status' => 'pending',
                'address' => 'Purok 7, Brgy. Mansilingan, Bacolod City, Negros Occidental',
                'tracking_code' => null,
            ],
            [
                'order_number' => 'PH-2026-004',
                'total_amount' => 3200.00,
                'status' => 'processing',
                'address' => 'Unit 302, Blue Residences, Katipunan Ave, Quezon City',
                'tracking_code' => null,
            ],
            [
                'order_number' => 'PH-2026-005',
                'total_amount' => 550.00,
                'status' => 'cancelled',
                'address' => 'Sitio Kapatagan, Brgy. Digos, Davao del Sur',
                'tracking_code' => null,
            ],
        ];

        foreach ($orders as $order) {
            Order::create($order);
        }
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('orders');
    }
};
