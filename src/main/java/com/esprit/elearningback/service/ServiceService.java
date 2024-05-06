package com.esprit.elearningback.service;


import com.esprit.elearningback.entity.Service;
import com.esprit.elearningback.repository.ServiceRepository;
import com.esprit.elearningback.repository.SubjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;

@Component
public class ServiceService {

    private final ServiceRepository serviceRepository;
    @Autowired
    public ServiceService(SubjectRepository subjectRepository, ServiceRepository serviceRepository) {
        this.serviceRepository = serviceRepository;

    }

    public List<Service> getServices() {

        return serviceRepository.findAll();

    }

    public void addNewService(Service service) {

        serviceRepository.save(service);    }

    public void updateService(Service service) {
        serviceRepository.save(service);
    }

    public void deleteServiceById(Long id) {
        serviceRepository.deleteById(id);
    }

    public List<Service> getServicesBySubjectId(Long subjectId) {
        return serviceRepository.findBySubjectId(subjectId);
    }

    public Service getServiceById(Long id) {
        return serviceRepository.findByServiceId(id);
    }

}
