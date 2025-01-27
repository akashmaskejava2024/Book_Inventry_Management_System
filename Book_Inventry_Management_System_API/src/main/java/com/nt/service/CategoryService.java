package com.nt.service;

import java.util.List;

import org.springframework.stereotype.Service;

import com.nt.entity.Category;

@Service
public interface CategoryService {

	Category addNewCategory(Category category);

	Category getById(int category_id);

	List<Category> getAllCategories();

}
