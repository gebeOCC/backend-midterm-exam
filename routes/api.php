<?php

use App\Http\Controllers\GroceryController;
use Illuminate\Support\Facades\Route;

Route::get('/groceries', [GroceryController::class, 'index']);
Route::get('/groceries/{id}', [GroceryController::class, 'show']);

Route::post('/groceries', [GroceryController::class, 'store']);

Route::put('/groceries/{id}', [GroceryController::class, 'update']);
Route::patch('/groceries/{id}', [GroceryController::class, 'update']);

Route::delete('/groceries/{id}', [GroceryController::class, 'destroy']);
