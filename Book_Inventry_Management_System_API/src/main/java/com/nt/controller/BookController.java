package com.nt.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nt.dto.APIResponse;
import com.nt.dto.BookRequestDTO;
import com.nt.dto.BookResponseDTO;
import com.nt.service.BookService;

@RestController
@CrossOrigin("*")
@RequestMapping("/books")
public class BookController {

	@Autowired
	private BookService bookService;

	@PostMapping
	public ResponseEntity<APIResponse> saveBook(@RequestBody BookRequestDTO dto) {

		BookResponseDTO resDto = bookService.addNewBook(dto);
		if (resDto != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new APIResponse(resDto, "Book Added Success"));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new APIResponse(null, "Book Added Failed"));
		}

	}
	
	
	@PostMapping("/all")
	public ResponseEntity<APIResponse> saveAllBook(@RequestBody List<BookRequestDTO> listDto) {

		List<BookResponseDTO> resDto = bookService.addAllBook(listDto);
		if (resDto != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new APIResponse(resDto, "Book Added Success"));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new APIResponse(null, "Book Added Failed"));
		}

	}

	@PutMapping
	public ResponseEntity<APIResponse> updateBook(@RequestBody BookRequestDTO dto) {

		BookResponseDTO resDto = bookService.updateBook(dto);
		if (resDto != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new APIResponse(resDto, "Book Added Success"));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new APIResponse(null, "Book Added Failed"));
		}
	}

	@GetMapping
	public ResponseEntity<APIResponse> getAllBooks() {
		List<BookResponseDTO> list = bookService.getALlBooks();
		if (list != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new APIResponse(list, "All Books Sent"));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new APIResponse(null, "Failed"));
		}
	}

	
	@DeleteMapping("/delete/{id}")
	public ResponseEntity<APIResponse> deleteBook(@PathVariable int id){
		
		BookResponseDTO resDto = bookService.deleteBook(id);
		if (resDto != null) {
			return ResponseEntity.status(HttpStatus.CREATED).body(new APIResponse(resDto, "Deleted"));
		} else {
			return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
					.body(new APIResponse(null, "Delete Failed"));
		}
		
		
	}
	
	
	
	
	
}
