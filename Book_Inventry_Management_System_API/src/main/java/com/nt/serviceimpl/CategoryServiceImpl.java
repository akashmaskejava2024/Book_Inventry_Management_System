package com.nt.serviceimpl;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nt.entity.Category;
import com.nt.repository.CategoryRepository;
import com.nt.service.CategoryService;

@Service
public class CategoryServiceImpl  implements CategoryService{
	@Autowired
	private CategoryRepository categoryRepository;

	@Override
	public Category addNewCategory(Category category) {
		
		return categoryRepository.save(category);
	}

	@Override
	public Category getById(int category_id) {
		
		Optional<Category> opt  = categoryRepository.findById(category_id);
		if(opt.isPresent()) {
			return opt.get();
		}
		return null;
		
		
	}

	@Override
	public List<Category> getAllCategories() {
		
		Iterable<Category> list= categoryRepository.findAll();
		List<Category> categories = new ArrayList<>();
		for(Category c : list) {
			categories.add(c);
		}
		
		return categories;
	}
	
	

}
