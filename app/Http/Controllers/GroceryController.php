<?php

namespace App\Http\Controllers;

use App\Models\grocery;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class GroceryController extends Controller
{
    public function index()
    {
        return grocery::all();
    }

    public function store(Request $request)
    {
        $validator = Validator::make(
            $request->all(),
            [
                'item_name' => 'required|string|max:255',
                'quantity' => 'nullable|integer|min:1',
                'category' => 'nullable|in:produce,meat,pantry,snacks,household',
                'status' => 'nullable|in:needed,in_cart,bought',
                'brand_preference' => 'nullable|string|max:255',
            ],
            [
                'item_name.required' => 'The item name is required.',
                'quantity.integer' => 'The quantity must be a valid number.',
                'quantity.min' => 'You must add at least 1 item.',
                'category.in' => 'Please select a valid category from the list.',
                'status.in' => 'Invalid status provided.',
                'brand_preference.max' => 'Brand name is too long.',
            ]
        );

        if ($validator->fails()) {
            return response()->json([
                'errors' => $validator->errors()
            ], 422);
        }

        Grocery::create($validator->validated());

        return response()->json([
            'message' => 'Grocery created successfully'
        ], 201);
    }

    public function show($id)
    {
        $grocery = grocery::find($id);

        if (!$grocery) {
            return response()->json([
                'message' => 'Grocery not found'
            ], 404);
        }

        return response()->json($grocery, 200);
    }

     public function update($id, Request $request)
    {
        $grocery = Grocery::find($id);

        if (!$grocery) {
            return response()->json(['message' => 'Grocery not found'], 404);
        }

        $validator = Validator::make(
            $request->all(),
            [
                'item_name' => 'required|string|max:255',
                'quantity' => 'nullable|integer|min:1',
                'category' => 'nullable|in:produce,meat,pantry,snacks,household',
                'status' => 'nullable|in:needed,in_cart,bought',
                'brand_preference' => 'nullable|string|max:255',
            ],
            [
                'item_name.required' => 'The item name is required.',
                'quantity.integer' => 'The quantity must be a valid number.',
                'quantity.min' => 'You must add at least 1 item.',
                'category.in' => 'Please select a valid category from the list.',
                'status.in' => 'Invalid status provided.',
                'brand_preference.max' => 'Brand name is too long.',
            ]
        );

        if ($validator->fails()) {
            return response()->json(['errors' => $validator->errors()], 422);
        }

        $grocery->update($validator->validated());

        return response()->json([
            'message' => 'Grocery updated successfully',
            'grocery' => $grocery
        ], 200);
    }


    public function destroy($id)
    {
        $grocery = grocery::find($id);

        if (!$grocery) {
            return response()->json([
                'message' => 'Grocery not found'
            ], 404);
        }

        $grocery->delete();

        return response()->json([
            'message' => 'Grocery deleted successfully'
        ], 200);
    }
}
