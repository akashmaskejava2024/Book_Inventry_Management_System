package com.nt.service;

import org.springframework.stereotype.Service;

import com.nt.entity.Category;

@Service
public interface CategoryService {

	Category addNewCategory(Category category);

	Category getById(int category_id);

}
