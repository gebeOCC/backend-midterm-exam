<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Grocery extends Model
{
    protected $table = "groceries";

    protected $fillable = [
        "item_name",
        "quantity",
        "category",
        "status",
        "brand_preference",
    ];
}
