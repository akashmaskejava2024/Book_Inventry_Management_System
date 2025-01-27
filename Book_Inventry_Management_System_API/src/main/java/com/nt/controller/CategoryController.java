package com.nt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nt.dto.APIResponse;
import com.nt.entity.Category;
import com.nt.service.CategoryService;

@CrossOrigin("*")
@RestController
@RequestMapping("/categories")
public class CategoryController {

	@Autowired
	private CategoryService categoryService;

	@PostMapping
	public ResponseEntity<APIResponse> createCategory(@RequestBody Category category) {

		Category addedCategory = categoryService.addNewCategory(category);
		if (addedCategory != null) {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(new APIResponse(addedCategory, "Category Added Succecssfully"));

		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new APIResponse(null, "Category Addition FailedÏ"));

		}

	}
	
	@GetMapping
  public ResponseEntity<APIResponse> getAllCategories() {
		
		List<Category> categories = categoryService.getAllCategories();
		
		if (categories != null) {
			return ResponseEntity.status(HttpStatus.CREATED)
					.body(new APIResponse(categories, "Category Added Succecssfully"));

		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new APIResponse(null, "Category Addition FailedÏ"));

		}
		
	
}

}
