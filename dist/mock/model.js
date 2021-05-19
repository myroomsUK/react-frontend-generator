export const model = {
    "negotiations": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "acceptedOffer": {
                "type": "money",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "acceptedOffer",
                "label": "acceptedOffer"
            },
            "negotiationOffers": {
                "targetClass": "App\\Entity\\Acquisition\\NegotiationOffer",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "offer": {
                            "type": "money",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "offer",
                            "label": "offer"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\NegotiationOfferPlaces",
                            "optionsName": "VALUES",
                            "type": "enum",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "accepted",
                                    "label": "Accepted"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "created",
                                    "label": "Created"
                                },
                                {
                                    "id": "waiting_for_response",
                                    "label": "Waiting for response"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Negotiation Offers",
                    "resourceName": "negotiation_offers"
                },
                "resourceName": "negotiation_offers",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "negotiationOffers",
                "label": "negotiationOffers"
            },
            "currentPlace": {
                "targetClass": "App\\Model\\Enum\\Places\\NegotiationPlaces",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": "accepted",
                        "label": "Accepted"
                    },
                    {
                        "id": "discarded",
                        "label": "Discarded"
                    },
                    {
                        "id": "created",
                        "label": "Created"
                    },
                    {
                        "id": "pending",
                        "label": "Pending"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "requestedTransition": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Negotiations",
        "resourceName": "negotiations"
    },
    "negotiation_offers": {
        "model": {
            "currentPlace": {
                "targetClass": "App\\Model\\Enum\\Places\\NegotiationOfferPlaces",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": "accepted",
                        "label": "Accepted"
                    },
                    {
                        "id": "discarded",
                        "label": "Discarded"
                    },
                    {
                        "id": "created",
                        "label": "Created"
                    },
                    {
                        "id": "waiting_for_response",
                        "label": "Waiting for response"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "requestedTransition": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Negotiation Offers",
        "resourceName": "negotiation_offers"
    },
    "agents": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "fullName": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "fullName",
                "label": "fullName"
            }
        },
        "title": "Agents",
        "resourceName": "agents"
    },
    "bank_accounts": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "bankName": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "bankName",
                "label": "bankName"
            },
            "accountName": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "accountName",
                "label": "accountName"
            },
            "accountNumber": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "accountNumber",
                "label": "accountNumber"
            },
            "sortCode": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "sortCode",
                "label": "sortCode"
            },
            "bic": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "bic",
                "label": "bic"
            },
            "iban": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "iban",
                "label": "iban"
            }
        },
        "title": "Bank Accounts",
        "resourceName": "bank_accounts"
    },
    "contracts": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "unsignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "unsignedFile",
                "label": "unsignedFile"
            },
            "issuerSignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "issuerSignedFile",
                "label": "issuerSignedFile"
            },
            "beneficiarySignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "beneficiarySignedFile",
                "label": "beneficiarySignedFile"
            },
            "startDate": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "startDate",
                "label": "startDate"
            },
            "issuer": {
                "targetClass": "App\\Entity\\PersonalData",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "name",
                            "label": "name"
                        },
                        "surname": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "surname",
                            "label": "surname"
                        },
                        "address1": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "address1",
                            "label": "address1"
                        },
                        "address2": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "address2",
                            "label": "address2"
                        },
                        "postcode": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "resource": {
                                "model": {
                                    "postcode": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "postcode",
                                        "label": "postcode"
                                    }
                                },
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "id": "postcode",
                            "label": "postcode"
                        },
                        "postcode2": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "resource": {
                                "model": {
                                    "postcode": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "postcode",
                                        "label": "postcode"
                                    }
                                },
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "id": "postcode2",
                            "label": "postcode2"
                        },
                        "email": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "email",
                            "label": "email"
                        },
                        "telephone": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "telephone",
                            "label": "telephone"
                        },
                        "mobile": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "mobile",
                            "label": "mobile"
                        },
                        "nino": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "nino",
                            "label": "nino"
                        }
                    },
                    "title": "Personal Data",
                    "resourceName": "personal_datas"
                },
                "resourceName": "personal_datas",
                "optionText": "name",
                "id": "issuer",
                "label": "issuer"
            },
            "beneficiary": {
                "targetClass": "App\\Entity\\PersonalData",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "name",
                            "label": "name"
                        },
                        "surname": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "surname",
                            "label": "surname"
                        },
                        "address1": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "address1",
                            "label": "address1"
                        },
                        "address2": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "address2",
                            "label": "address2"
                        },
                        "postcode": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "resource": {
                                "model": {
                                    "postcode": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "postcode",
                                        "label": "postcode"
                                    }
                                },
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "id": "postcode",
                            "label": "postcode"
                        },
                        "postcode2": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "resource": {
                                "model": {
                                    "postcode": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "postcode",
                                        "label": "postcode"
                                    }
                                },
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "id": "postcode2",
                            "label": "postcode2"
                        },
                        "email": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "email",
                            "label": "email"
                        },
                        "telephone": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "telephone",
                            "label": "telephone"
                        },
                        "mobile": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "mobile",
                            "label": "mobile"
                        },
                        "nino": {
                            "type": "string",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "nino",
                            "label": "nino"
                        }
                    },
                    "title": "Personal Data",
                    "resourceName": "personal_datas"
                },
                "resourceName": "personal_datas",
                "optionText": "name",
                "id": "beneficiary",
                "label": "beneficiary"
            },
            "useDocusign": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "useDocusign",
                "label": "useDocusign"
            }
        },
        "title": "Contracts",
        "resourceName": "contracts"
    },
    "holding_deposit_contracts": {
        "model": {
            "currentPlace": {
                "targetClass": "App\\Model\\Enum\\Places\\HoldingDepositContractPlaces",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": "created",
                        "label": "Created"
                    },
                    {
                        "id": "flow_type_chosen",
                        "label": "Flow Chosen"
                    },
                    {
                        "id": "data_uploaded",
                        "label": "Data Uploaded"
                    },
                    {
                        "id": "unsigned_uploaded",
                        "label": "Unsigned Uploaded"
                    },
                    {
                        "id": "issuer_uploaded",
                        "label": "Issuer Uploaded"
                    },
                    {
                        "id": "finalized",
                        "label": "Finalized"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "unsignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "unsignedFile",
                "label": "unsignedFile"
            },
            "issuerSignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "issuerSignedFile",
                "label": "issuerSignedFile"
            },
            "beneficiarySignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "beneficiarySignedFile",
                "label": "beneficiarySignedFile"
            },
            "requestedTransition": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Holding deposit contracts",
        "resourceName": "holding_deposit_contracts"
    },
    "landlord_contracts": {
        "model": {
            "witnessSignedFile": {
                "type": "file_single",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "witnessSignedFile",
                "label": "witnessSignedFile"
            },
            "months": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "months",
                "label": "months"
            },
            "fee": {
                "type": "money",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "fee",
                "label": "fee"
            },
            "rentFreePeriod": {
                "targetClass": "App\\Model\\Enum\\LandlordTenancy\\RentFreePeriod",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "One week"
                    },
                    {
                        "id": 1,
                        "label": "Two weeks"
                    },
                    {
                        "id": 2,
                        "label": "Three weeks"
                    },
                    {
                        "id": 3,
                        "label": "One month"
                    },
                    {
                        "id": 4,
                        "label": "Two months"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "rentFreePeriod",
                "label": "rentFreePeriod"
            },
            "deposit": {
                "targetClass": "App\\Model\\Enum\\LandlordTenancy\\Deposit",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "One week"
                    },
                    {
                        "id": 1,
                        "label": "Two weeks"
                    },
                    {
                        "id": 2,
                        "label": "Three weeks"
                    },
                    {
                        "id": 3,
                        "label": "One month"
                    },
                    {
                        "id": 4,
                        "label": "Two months"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "deposit",
                "label": "deposit"
            },
            "payments": {
                "targetClass": "App\\Entity\\Payments\\Tenancy\\LandlordTenancyPayment",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": false,
                "resource": {
                    "model": [],
                    "title": "Landlord Tenancy Payments",
                    "resourceName": "landlord_tenancy_payments"
                },
                "resourceName": "landlord_tenancy_payments",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "payments",
                "label": "payments"
            },
            "defaultPaymentDay": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "defaultPaymentDay",
                "label": "defaultPaymentDay"
            },
            "endDate": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "endDate",
                "label": "endDate"
            },
            "witnessFullName": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "witnessFullName",
                "label": "witnessFullName"
            },
            "witnessEmail": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "witnessEmail",
                "label": "witnessEmail"
            },
            "currentPlace": {
                "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordContractPlaces",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": "created",
                        "label": "Created"
                    },
                    {
                        "id": "flow_type_chosen",
                        "label": "Flow Chosen"
                    },
                    {
                        "id": "data_uploaded",
                        "label": "Data Uploaded"
                    },
                    {
                        "id": "unsigned_uploaded",
                        "label": "Unsigned Uploaded"
                    },
                    {
                        "id": "beneficiary_uploaded",
                        "label": "Beneficiary Uploaded"
                    },
                    {
                        "id": "issuer_uploaded",
                        "label": "Issuer Uploaded"
                    },
                    {
                        "id": "finalized",
                        "label": "Finalized"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "unsignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "unsignedFile",
                "label": "unsignedFile"
            },
            "issuerSignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "issuerSignedFile",
                "label": "issuerSignedFile"
            },
            "beneficiarySignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "beneficiarySignedFile",
                "label": "beneficiarySignedFile"
            },
            "startDate": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "startDate",
                "label": "startDate"
            },
            "requestedTransition": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Landlord Contracts",
        "resourceName": "landlord_contracts"
    },
    "landlord_renewal_contracts": {
        "model": {
            "rent": {
                "type": "money",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "rent",
                "label": "rent"
            },
            "depositAmount": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "depositAmount",
                "label": "depositAmount"
            },
            "endDate": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "endDate",
                "label": "endDate"
            },
            "unsignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "unsignedFile",
                "label": "unsignedFile"
            },
            "issuerSignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "issuerSignedFile",
                "label": "issuerSignedFile"
            },
            "beneficiarySignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "beneficiarySignedFile",
                "label": "beneficiarySignedFile"
            },
            "startDate": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "startDate",
                "label": "startDate"
            },
            "currentPlace": {
                "type": "string",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "requestedTransition": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Landlord Renewal contracts",
        "resourceName": "landlord_renewal_contracts"
    },
    "tenant_contracts": {
        "model": {
            "witnessSignedFile": {
                "type": "file_single",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "witnessSignedFile",
                "label": "witnessSignedFile"
            },
            "months": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "months",
                "label": "months"
            },
            "fee": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "fee",
                "label": "fee"
            },
            "deposit": {
                "targetClass": "App\\Model\\Enum\\LandlordTenancy\\Deposit",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "One week"
                    },
                    {
                        "id": 1,
                        "label": "Two weeks"
                    },
                    {
                        "id": 2,
                        "label": "Three weeks"
                    },
                    {
                        "id": 3,
                        "label": "One month"
                    },
                    {
                        "id": 4,
                        "label": "Two months"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "deposit",
                "label": "deposit"
            },
            "payments": {
                "targetClass": "App\\Entity\\Payments\\Tenancy\\TenantTenancyPayment",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": false,
                "resource": {
                    "model": [],
                    "title": "Tenant Tenancy Payments",
                    "resourceName": "tenant_tenancy_payments"
                },
                "resourceName": "tenant_tenancy_payments",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "payments",
                "label": "payments"
            },
            "defaultPaymentDay": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "defaultPaymentDay",
                "label": "defaultPaymentDay"
            },
            "endDate": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "endDate",
                "label": "endDate"
            },
            "unsignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "unsignedFile",
                "label": "unsignedFile"
            },
            "issuerSignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "issuerSignedFile",
                "label": "issuerSignedFile"
            },
            "beneficiarySignedFile": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "beneficiarySignedFile",
                "label": "beneficiarySignedFile"
            }
        },
        "title": "Tenant Contracts",
        "resourceName": "tenant_contracts"
    },
    "enquiries": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            },
            "surname": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "surname",
                "label": "surname"
            },
            "email": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "email",
                "label": "email"
            },
            "phoneNumber": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "phoneNumber",
                "label": "phoneNumber"
            },
            "unitType": {
                "targetClass": "App\\Entity\\Units\\UnitType",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "description": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "description",
                            "label": "description"
                        }
                    },
                    "title": "Unit Types",
                    "resourceName": "unit_types"
                },
                "resourceName": "unit_types",
                "optionText": "description",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "unitType",
                "label": "unitType"
            },
            "numberOfTenants": {
                "type": "integer",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "numberOfTenants",
                "label": "numberOfTenants"
            },
            "startDate": {
                "type": "date",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "startDate",
                "label": "startDate"
            },
            "endDate": {
                "type": "date",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "endDate",
                "label": "endDate"
            },
            "tenantType": {
                "targetClass": "App\\Model\\Enum\\Enquiries\\TenantType",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "Student"
                    },
                    {
                        "id": 1,
                        "label": "Professional"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "tenantType",
                "label": "tenantType"
            },
            "portal": {
                "targetClass": "App\\Entity\\Marketing\\Portal",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Portal",
                    "resourceName": "portals"
                },
                "resourceName": "portals",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "portal",
                "label": "portal"
            },
            "enquiredRoom": {
                "targetClass": "App\\Entity\\Units\\Unit",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "images": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "images",
                            "label": "images"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\UnitPlaces",
                            "optionsName": "VALUES",
                            "type": "enum_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "enquired",
                                    "label": "Enquired"
                                },
                                {
                                    "id": "available_to_let",
                                    "label": "Available to let"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "let",
                                    "label": "Let"
                                },
                                {
                                    "id": "unavailable_to_let",
                                    "label": "Unavailable"
                                },
                                {
                                    "id": "under_offer",
                                    "label": "Under Offer"
                                },
                                {
                                    "id": "managed",
                                    "label": "Managed"
                                },
                                {
                                    "id": "not_managed",
                                    "label": "Unmanaged"
                                },
                                {
                                    "id": "vacant",
                                    "label": "Vacant"
                                },
                                {
                                    "id": "occupied",
                                    "label": "Occupied"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Units",
                    "resourceName": "units"
                },
                "resourceName": "units",
                "optionText": "reference",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "enquiredRoom",
                "label": "enquiredRoom"
            },
            "neighborhood": {
                "targetClass": "App\\Entity\\Localization\\Neighborhood",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Neighborhoods",
                    "resourceName": "neighborhoods"
                },
                "resourceName": "neighborhoods",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "neighborhood",
                "label": "neighborhood"
            },
            "specialRequirements": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "specialRequirements",
                "label": "specialRequirements"
            },
            "status": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "status",
                "label": "status"
            },
            "price": {
                "type": "integer",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "price",
                "label": "price"
            },
            "reasons": {
                "targetClass": "App\\Entity\\Enquiry\\RejectReason",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "reason": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "reason",
                            "label": "reason"
                        }
                    },
                    "title": "Reject Reasons",
                    "resourceName": "reject_reasons"
                },
                "resourceName": "reject_reasons",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "reasons",
                "label": "reasons"
            }
        },
        "title": "Enquiries",
        "resourceName": "enquiries"
    },
    "reject_reasons": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "reason": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "reason",
                "label": "reason"
            }
        },
        "title": "Reject Reasons",
        "resourceName": "reject_reasons"
    },
    "events": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "description": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "description",
                "label": "description"
            },
            "createdAt": {
                "type": "date",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "createdAt",
                "label": "createdAt"
            }
        },
        "title": "Events",
        "resourceName": "events"
    },
    "landlords": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "mainContact": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "mainContact",
                "label": "mainContact"
            },
            "personalData": {
                "targetClass": "App\\Entity\\PersonalData",
                "type": "embedded_single",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "name",
                            "label": "name"
                        },
                        "surname": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "surname",
                            "label": "surname"
                        },
                        "address1": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "address1",
                            "label": "address1"
                        },
                        "address2": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "address2",
                            "label": "address2"
                        },
                        "postcode": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "postcode": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "postcode",
                                        "label": "postcode"
                                    }
                                },
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "id": "postcode",
                            "label": "postcode"
                        },
                        "postcode2": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "postcode": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "postcode",
                                        "label": "postcode"
                                    }
                                },
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "id": "postcode2",
                            "label": "postcode2"
                        },
                        "email": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "email",
                            "label": "email"
                        },
                        "telephone": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "telephone",
                            "label": "telephone"
                        },
                        "mobile": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "mobile",
                            "label": "mobile"
                        },
                        "nino": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "nino",
                            "label": "nino"
                        }
                    },
                    "title": "Personal Data",
                    "resourceName": "personal_datas"
                },
                "resourceName": "personal_datas",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "personalData",
                "label": "personalData"
            },
            "landlordRelationships": {
                "targetClass": "App\\Entity\\LandlordRelationship",
                "type": "embedded_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": {
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordRelationshipPlaces",
                            "optionsName": "VALUES",
                            "type": "enum_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "created",
                                    "label": "Created"
                                },
                                {
                                    "id": "basic_details_set",
                                    "label": "Basic details set"
                                },
                                {
                                    "id": "pre_approved",
                                    "label": "Pre-approved"
                                },
                                {
                                    "id": "rejected",
                                    "label": "Rejected"
                                },
                                {
                                    "id": "negotiation_approved",
                                    "label": "Negotiation approved"
                                },
                                {
                                    "id": "post_approved",
                                    "label": "Post approved"
                                },
                                {
                                    "id": "approved",
                                    "label": "Approved"
                                },
                                {
                                    "id": "active",
                                    "label": "Active"
                                },
                                {
                                    "id": "expired",
                                    "label": "Expired"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Landlord Relationships",
                    "resourceName": "landlord_relationships"
                },
                "resourceName": "landlord_relationships",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "landlordRelationships",
                "label": "landlordRelationships"
            }
        },
        "title": "Landlords",
        "resourceName": "landlords"
    },
    "landlord_relationships": {
        "filters": {
            "text": [
                "property.propertyName"
            ],
            "enum_multiple": [
                "currentPlace"
            ]
        },
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "code": {
                "type": "string",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "code",
                "label": "code"
            },
            "property": {
                "targetClass": "App\\Entity\\Properties\\Property",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "type": {
                            "targetClass": "App\\Entity\\Properties\\PropertyType",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Property Types",
                                "resourceName": "property_types"
                            },
                            "resourceName": "property_types",
                            "optionText": "description",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "type",
                            "label": "type"
                        },
                        "propertyName": {
                            "type": "string",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "propertyName",
                            "label": "propertyName"
                        },
                        "address": {
                            "type": "string",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "address",
                            "label": "address"
                        },
                        "floorplans": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "floorplans",
                            "label": "floorplans"
                        },
                        "country": {
                            "targetClass": "App\\Entity\\Localization\\Country",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Countries",
                                "resourceName": "countries"
                            },
                            "resourceName": "countries",
                            "optionText": "name",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "country",
                            "label": "country"
                        },
                        "city": {
                            "targetClass": "App\\Entity\\Localization\\City",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Cities",
                                "resourceName": "cities"
                            },
                            "resourceName": "cities",
                            "optionText": "name",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "city",
                            "label": "city"
                        },
                        "county": {
                            "targetClass": "App\\Entity\\Localization\\County",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Counties",
                                "resourceName": "counties"
                            },
                            "resourceName": "counties",
                            "optionText": "name",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "county",
                            "label": "county"
                        },
                        "area": {
                            "targetClass": "App\\Entity\\Localization\\Area",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Areas",
                                "resourceName": "areas"
                            },
                            "resourceName": "areas",
                            "optionText": "name",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "area",
                            "label": "area"
                        },
                        "neighborhood": {
                            "targetClass": "App\\Entity\\Localization\\Neighborhood",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Neighborhoods",
                                "resourceName": "neighborhoods"
                            },
                            "resourceName": "neighborhoods",
                            "optionText": "name",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "neighborhood",
                            "label": "neighborhood"
                        },
                        "postcode": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "postcode",
                            "label": "postcode"
                        },
                        "images": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "images",
                            "label": "images"
                        },
                        "units": {
                            "targetClass": "App\\Entity\\Units\\Unit",
                            "type": "embedded_multiple",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "unitLetter": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "unitLetter",
                                        "label": "unitLetter"
                                    },
                                    "type": {
                                        "targetClass": "App\\Entity\\Units\\UnitType",
                                        "type": "reference",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "resource": {
                                            "model": [],
                                            "title": "Unit Types",
                                            "resourceName": "unit_types"
                                        },
                                        "resourceName": "unit_types",
                                        "optionText": "description",
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "type",
                                        "label": "type"
                                    },
                                    "weeklyPrice": {
                                        "type": "money",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "weeklyPrice",
                                        "label": "weeklyPrice"
                                    },
                                    "images": {
                                        "type": "file_multiple",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "images",
                                        "label": "images"
                                    },
                                    "currentPlace": {
                                        "targetClass": "App\\Model\\Enum\\Places\\UnitPlaces",
                                        "optionsName": "VALUES",
                                        "type": "enum_multiple",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": "enquired",
                                                "label": "Enquired"
                                            },
                                            {
                                                "id": "available_to_let",
                                                "label": "Available to let"
                                            },
                                            {
                                                "id": "discarded",
                                                "label": "Discarded"
                                            },
                                            {
                                                "id": "let",
                                                "label": "Let"
                                            },
                                            {
                                                "id": "unavailable_to_let",
                                                "label": "Unavailable"
                                            },
                                            {
                                                "id": "under_offer",
                                                "label": "Under Offer"
                                            },
                                            {
                                                "id": "managed",
                                                "label": "Managed"
                                            },
                                            {
                                                "id": "not_managed",
                                                "label": "Unmanaged"
                                            },
                                            {
                                                "id": "vacant",
                                                "label": "Vacant"
                                            },
                                            {
                                                "id": "occupied",
                                                "label": "Occupied"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "currentPlace",
                                        "label": "currentPlace"
                                    },
                                    "requestedTransition": {
                                        "id": "requestedTransition",
                                        "label": "requestedTransition"
                                    },
                                    "eligibleTransitions": {
                                        "id": "eligibleTransitions",
                                        "label": "eligibleTransitions"
                                    }
                                },
                                "title": "Units",
                                "resourceName": "units"
                            },
                            "resourceName": "units",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "units",
                            "label": "units"
                        },
                        "askedMonthlyPrice": {
                            "type": "integer",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "askedMonthlyPrice",
                            "label": "askedMonthlyPrice"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\PropertyPlaces",
                            "optionsName": "VALUES",
                            "type": "enum",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "enquired",
                                    "label": "Enquired"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "managed",
                                    "label": "Managed"
                                },
                                {
                                    "id": "not_managed",
                                    "label": "Not Managed"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Properties",
                    "resourceName": "properties"
                },
                "resourceName": "properties",
                "optionText": "propertyName",
                "id": "property",
                "label": "property"
            },
            "landlord": {
                "targetClass": "App\\Entity\\Landlord",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "mainContact": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "mainContact",
                            "label": "mainContact"
                        },
                        "personalData": {
                            "targetClass": "App\\Entity\\PersonalData",
                            "type": "embedded_single",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "name": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "name",
                                        "label": "name"
                                    },
                                    "surname": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "surname",
                                        "label": "surname"
                                    },
                                    "address1": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "address1",
                                        "label": "address1"
                                    },
                                    "postcode": {
                                        "targetClass": "App\\Entity\\Localization\\Postcode",
                                        "type": "reference",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "resource": {
                                            "model": [],
                                            "title": "Postcodes",
                                            "resourceName": "postcodes"
                                        },
                                        "resourceName": "postcodes",
                                        "optionText": "postcode",
                                        "id": "postcode",
                                        "label": "postcode"
                                    },
                                    "postcode2": {
                                        "targetClass": "App\\Entity\\Localization\\Postcode",
                                        "type": "reference",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "resource": {
                                            "model": [],
                                            "title": "Postcodes",
                                            "resourceName": "postcodes"
                                        },
                                        "resourceName": "postcodes",
                                        "optionText": "postcode",
                                        "id": "postcode2",
                                        "label": "postcode2"
                                    },
                                    "email": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "email",
                                        "label": "email"
                                    },
                                    "telephone": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "telephone",
                                        "label": "telephone"
                                    },
                                    "mobile": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "mobile",
                                        "label": "mobile"
                                    },
                                    "nino": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "nino",
                                        "label": "nino"
                                    }
                                },
                                "title": "Personal Data",
                                "resourceName": "personal_datas"
                            },
                            "resourceName": "personal_datas",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "personalData",
                            "label": "personalData"
                        }
                    },
                    "title": "Landlords",
                    "resourceName": "landlords"
                },
                "resourceName": "landlords",
                "optionText": "id",
                "id": "landlord",
                "label": "landlord"
            },
            "firstLandlordTenancy": {
                "targetClass": "App\\Entity\\LandlordTenancies\\FirstLandlordTenancy",
                "type": "embedded_single",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "holdingDepositContract": {
                            "targetClass": "App\\Entity\\Contracts\\HoldingDepositContract",
                            "type": "embedded_single",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "holdingDeposit": {
                                        "targetClass": "App\\Model\\Enum\\LandlordTenancy\\HoldingDepositPeriod",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": 0,
                                                "label": "One week"
                                            },
                                            {
                                                "id": 1,
                                                "label": "Two weeks"
                                            },
                                            {
                                                "id": 2,
                                                "label": "Three weeks"
                                            },
                                            {
                                                "id": 3,
                                                "label": "One month"
                                            },
                                            {
                                                "id": 4,
                                                "label": "Two months"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "holdingDeposit",
                                        "label": "holdingDeposit"
                                    },
                                    "securityDeposit": {
                                        "targetClass": "App\\Model\\Enum\\LandlordTenancy\\SecurityDepositPeriod",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": 0,
                                                "label": "One week"
                                            },
                                            {
                                                "id": 1,
                                                "label": "Two weeks"
                                            },
                                            {
                                                "id": 2,
                                                "label": "Three weeks"
                                            },
                                            {
                                                "id": 3,
                                                "label": "Four weeks"
                                            },
                                            {
                                                "id": 4,
                                                "label": "Five weeks"
                                            },
                                            {
                                                "id": 5,
                                                "label": "Six weeks"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "securityDeposit",
                                        "label": "securityDeposit"
                                    },
                                    "deadline": {
                                        "type": "date",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "deadline",
                                        "label": "deadline"
                                    },
                                    "hasBreakClause": {
                                        "type": "boolean",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "hasBreakClause",
                                        "label": "hasBreakClause"
                                    },
                                    "party": {
                                        "targetClass": "App\\Model\\Enum\\Contract\\Party",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": 0,
                                                "label": "Landlord"
                                            },
                                            {
                                                "id": 1,
                                                "label": "Tenant"
                                            },
                                            {
                                                "id": 2,
                                                "label": "Both parties"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "party",
                                        "label": "party"
                                    },
                                    "breakExercisable": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "breakExercisable",
                                        "label": "breakExercisable"
                                    },
                                    "breakNoticePeriod": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "breakNoticePeriod",
                                        "label": "breakNoticePeriod"
                                    },
                                    "rentFrequency": {
                                        "targetClass": "App\\Model\\Enum\\Contract\\Frequency",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": 0,
                                                "label": "Weekly"
                                            },
                                            {
                                                "id": 1,
                                                "label": "Monthly"
                                            },
                                            {
                                                "id": 2,
                                                "label": "Quarterly"
                                            },
                                            {
                                                "id": 3,
                                                "label": "Annually"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "rentFrequency",
                                        "label": "rentFrequency"
                                    },
                                    "rentFrequencyModality": {
                                        "targetClass": "App\\Model\\Enum\\Contract\\PaymentModality",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": 0,
                                                "label": "In Advance"
                                            },
                                            {
                                                "id": 1,
                                                "label": "In Arrears"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "rentFrequencyModality",
                                        "label": "rentFrequencyModality"
                                    },
                                    "rentPaymentMethod": {
                                        "targetClass": "App\\Model\\Enum\\Contract\\PaymentMethod",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": 0,
                                                "label": "Cash"
                                            },
                                            {
                                                "id": 1,
                                                "label": "Cheque"
                                            },
                                            {
                                                "id": 2,
                                                "label": "Standing order"
                                            },
                                            {
                                                "id": 3,
                                                "label": "Direct debit"
                                            },
                                            {
                                                "id": 4,
                                                "label": "Bankers / Building society draft"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "rentPaymentMethod",
                                        "label": "rentPaymentMethod"
                                    },
                                    "isDepositRequired": {
                                        "type": "boolean",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "isDepositRequired",
                                        "label": "isDepositRequired"
                                    },
                                    "guarantorName": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": false,
                                        "id": "guarantorName",
                                        "label": "guarantorName"
                                    },
                                    "currentPlace": {
                                        "targetClass": "App\\Model\\Enum\\Places\\HoldingDepositContractPlaces",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": "created",
                                                "label": "Created"
                                            },
                                            {
                                                "id": "flow_type_chosen",
                                                "label": "Flow Chosen"
                                            },
                                            {
                                                "id": "data_uploaded",
                                                "label": "Data Uploaded"
                                            },
                                            {
                                                "id": "unsigned_uploaded",
                                                "label": "Unsigned Uploaded"
                                            },
                                            {
                                                "id": "issuer_uploaded",
                                                "label": "Issuer Uploaded"
                                            },
                                            {
                                                "id": "finalized",
                                                "label": "Finalized"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "currentPlace",
                                        "label": "currentPlace"
                                    },
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "unsignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "unsignedFile",
                                        "label": "unsignedFile"
                                    },
                                    "issuerSignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "issuerSignedFile",
                                        "label": "issuerSignedFile"
                                    },
                                    "beneficiarySignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "beneficiarySignedFile",
                                        "label": "beneficiarySignedFile"
                                    },
                                    "startDate": {
                                        "type": "date",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "startDate",
                                        "label": "startDate"
                                    },
                                    "requestedTransition": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": false,
                                        "id": "requestedTransition",
                                        "label": "requestedTransition"
                                    },
                                    "eligibleTransitions": {
                                        "id": "eligibleTransitions",
                                        "label": "eligibleTransitions"
                                    }
                                },
                                "title": "Holding deposit contracts",
                                "resourceName": "holding_deposit_contracts"
                            },
                            "resourceName": "holding_deposit_contracts",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "holdingDepositContract",
                            "label": "holdingDepositContract"
                        },
                        "landlordContract": {
                            "targetClass": "App\\Entity\\Contracts\\LandlordContract",
                            "type": "embedded_single",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "witnessSignedFile": {
                                        "type": "file_single",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "witnessSignedFile",
                                        "label": "witnessSignedFile"
                                    },
                                    "months": {
                                        "type": "integer",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "months",
                                        "label": "months"
                                    },
                                    "fee": {
                                        "type": "money",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "fee",
                                        "label": "fee"
                                    },
                                    "rentFreePeriod": {
                                        "targetClass": "App\\Model\\Enum\\LandlordTenancy\\RentFreePeriod",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": 0,
                                                "label": "One week"
                                            },
                                            {
                                                "id": 1,
                                                "label": "Two weeks"
                                            },
                                            {
                                                "id": 2,
                                                "label": "Three weeks"
                                            },
                                            {
                                                "id": 3,
                                                "label": "One month"
                                            },
                                            {
                                                "id": 4,
                                                "label": "Two months"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "rentFreePeriod",
                                        "label": "rentFreePeriod"
                                    },
                                    "deposit": {
                                        "targetClass": "App\\Model\\Enum\\LandlordTenancy\\Deposit",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": 0,
                                                "label": "One week"
                                            },
                                            {
                                                "id": 1,
                                                "label": "Two weeks"
                                            },
                                            {
                                                "id": 2,
                                                "label": "Three weeks"
                                            },
                                            {
                                                "id": 3,
                                                "label": "One month"
                                            },
                                            {
                                                "id": 4,
                                                "label": "Two months"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "deposit",
                                        "label": "deposit"
                                    },
                                    "payments": {
                                        "targetClass": "App\\Entity\\Payments\\Tenancy\\LandlordTenancyPayment",
                                        "type": "embedded_multiple",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "resource": {
                                            "model": {
                                                "id": {
                                                    "type": "id",
                                                    "nullable": false,
                                                    "write": false,
                                                    "read": false,
                                                    "validators": [
                                                        "required"
                                                    ],
                                                    "errorMessages": [
                                                        "This field is required"
                                                    ],
                                                    "id": "id",
                                                    "label": "id"
                                                },
                                                "fee": {
                                                    "type": "integer",
                                                    "nullable": true,
                                                    "write": false,
                                                    "read": true,
                                                    "id": "fee",
                                                    "label": "fee"
                                                },
                                                "dueDate": {
                                                    "type": "date",
                                                    "nullable": true,
                                                    "write": false,
                                                    "read": true,
                                                    "id": "dueDate",
                                                    "label": "dueDate"
                                                },
                                                "status": {
                                                    "targetClass": "App\\Model\\Enum\\Payment\\PaymentStatus",
                                                    "optionsName": "VALUES",
                                                    "type": "enum",
                                                    "nullable": false,
                                                    "write": false,
                                                    "read": true,
                                                    "options": [
                                                        {
                                                            "id": 0,
                                                            "label": "Draft"
                                                        },
                                                        {
                                                            "id": 1,
                                                            "label": "To be paid"
                                                        },
                                                        {
                                                            "id": 2,
                                                            "label": "Authorised"
                                                        },
                                                        {
                                                            "id": 3,
                                                            "label": "Paid"
                                                        },
                                                        {
                                                            "id": 4,
                                                            "label": "Voided"
                                                        },
                                                        {
                                                            "id": 5,
                                                            "label": "Deleted"
                                                        }
                                                    ],
                                                    "validators": [
                                                        "required"
                                                    ],
                                                    "errorMessages": [
                                                        "This field is required"
                                                    ],
                                                    "id": "status",
                                                    "label": "status"
                                                },
                                                "type": {
                                                    "targetClass": "App\\Model\\Enum\\Payment\\PaymentType",
                                                    "optionsName": "VALUES",
                                                    "type": "enum",
                                                    "nullable": false,
                                                    "write": false,
                                                    "read": true,
                                                    "options": [
                                                        {
                                                            "id": 0,
                                                            "label": "Ingoing"
                                                        },
                                                        {
                                                            "id": 1,
                                                            "label": "Outgoing"
                                                        }
                                                    ],
                                                    "validators": [
                                                        "required"
                                                    ],
                                                    "errorMessages": [
                                                        "This field is required"
                                                    ],
                                                    "id": "type",
                                                    "label": "type"
                                                }
                                            },
                                            "title": "Landlord Tenancy Payments",
                                            "resourceName": "landlord_tenancy_payments"
                                        },
                                        "resourceName": "landlord_tenancy_payments",
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "payments",
                                        "label": "payments"
                                    },
                                    "defaultPaymentDay": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "defaultPaymentDay",
                                        "label": "defaultPaymentDay"
                                    },
                                    "endDate": {
                                        "type": "date",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "endDate",
                                        "label": "endDate"
                                    },
                                    "witnessFullName": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "witnessFullName",
                                        "label": "witnessFullName"
                                    },
                                    "witnessEmail": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "witnessEmail",
                                        "label": "witnessEmail"
                                    },
                                    "currentPlace": {
                                        "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordContractPlaces",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": "created",
                                                "label": "Created"
                                            },
                                            {
                                                "id": "flow_type_chosen",
                                                "label": "Flow Chosen"
                                            },
                                            {
                                                "id": "data_uploaded",
                                                "label": "Data Uploaded"
                                            },
                                            {
                                                "id": "unsigned_uploaded",
                                                "label": "Unsigned Uploaded"
                                            },
                                            {
                                                "id": "beneficiary_uploaded",
                                                "label": "Beneficiary Uploaded"
                                            },
                                            {
                                                "id": "issuer_uploaded",
                                                "label": "Issuer Uploaded"
                                            },
                                            {
                                                "id": "finalized",
                                                "label": "Finalized"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "currentPlace",
                                        "label": "currentPlace"
                                    },
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "unsignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "unsignedFile",
                                        "label": "unsignedFile"
                                    },
                                    "issuerSignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "issuerSignedFile",
                                        "label": "issuerSignedFile"
                                    },
                                    "beneficiarySignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "beneficiarySignedFile",
                                        "label": "beneficiarySignedFile"
                                    },
                                    "startDate": {
                                        "type": "date",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "startDate",
                                        "label": "startDate"
                                    },
                                    "requestedTransition": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": false,
                                        "id": "requestedTransition",
                                        "label": "requestedTransition"
                                    },
                                    "eligibleTransitions": {
                                        "id": "eligibleTransitions",
                                        "label": "eligibleTransitions"
                                    }
                                },
                                "title": "Landlord Contracts",
                                "resourceName": "landlord_contracts"
                            },
                            "resourceName": "landlord_contracts",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "landlordContract",
                            "label": "landlordContract"
                        },
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "xeroContactId": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "xeroContactId",
                            "label": "xeroContactId"
                        },
                        "rent": {
                            "type": "integer",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "rent",
                            "label": "rent"
                        }
                    },
                    "title": "First Landlord Tenancies",
                    "resourceName": "first_landlord_tenancies"
                },
                "resourceName": "first_landlord_tenancies",
                "id": "firstLandlordTenancy",
                "label": "firstLandlordTenancy"
            },
            "negotiation": {
                "targetClass": "App\\Entity\\Acquisition\\Negotiation",
                "type": "embedded_single",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "acceptedOffer": {
                            "type": "money",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "acceptedOffer",
                            "label": "acceptedOffer"
                        },
                        "negotiationOffers": {
                            "targetClass": "App\\Entity\\Acquisition\\NegotiationOffer",
                            "type": "embedded_multiple",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "offer": {
                                        "type": "money",
                                        "nullable": false,
                                        "write": true,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "offer",
                                        "label": "offer"
                                    },
                                    "currentPlace": {
                                        "targetClass": "App\\Model\\Enum\\Places\\NegotiationOfferPlaces",
                                        "optionsName": "VALUES",
                                        "type": "enum",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "options": [
                                            {
                                                "id": "accepted",
                                                "label": "Accepted"
                                            },
                                            {
                                                "id": "discarded",
                                                "label": "Discarded"
                                            },
                                            {
                                                "id": "created",
                                                "label": "Created"
                                            },
                                            {
                                                "id": "waiting_for_response",
                                                "label": "Waiting for response"
                                            }
                                        ],
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "currentPlace",
                                        "label": "currentPlace"
                                    },
                                    "requestedTransition": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": false,
                                        "id": "requestedTransition",
                                        "label": "requestedTransition"
                                    },
                                    "eligibleTransitions": {
                                        "id": "eligibleTransitions",
                                        "label": "eligibleTransitions"
                                    }
                                },
                                "title": "Negotiation Offers",
                                "resourceName": "negotiation_offers"
                            },
                            "resourceName": "negotiation_offers",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "negotiationOffers",
                            "label": "negotiationOffers"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\NegotiationPlaces",
                            "optionsName": "VALUES",
                            "type": "enum",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "accepted",
                                    "label": "Accepted"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "created",
                                    "label": "Created"
                                },
                                {
                                    "id": "pending",
                                    "label": "Pending"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Negotiations",
                    "resourceName": "negotiations"
                },
                "resourceName": "negotiations",
                "id": "negotiation",
                "label": "negotiation"
            },
            "renewals": {
                "targetClass": "App\\Entity\\LandlordTenancies\\RenewalLandlordTenancy",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "landlordContract": {
                            "targetClass": "App\\Entity\\Contracts\\LandlordRenewalContract",
                            "type": "embedded_single",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "rent": {
                                        "type": "money",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "rent",
                                        "label": "rent"
                                    },
                                    "depositAmount": {
                                        "type": "integer",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "depositAmount",
                                        "label": "depositAmount"
                                    },
                                    "endDate": {
                                        "type": "date",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "endDate",
                                        "label": "endDate"
                                    },
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "unsignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "unsignedFile",
                                        "label": "unsignedFile"
                                    },
                                    "issuerSignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "issuerSignedFile",
                                        "label": "issuerSignedFile"
                                    },
                                    "beneficiarySignedFile": {
                                        "type": "file_single",
                                        "nullable": true,
                                        "write": false,
                                        "read": true,
                                        "id": "beneficiarySignedFile",
                                        "label": "beneficiarySignedFile"
                                    },
                                    "startDate": {
                                        "type": "date",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "startDate",
                                        "label": "startDate"
                                    },
                                    "currentPlace": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "currentPlace",
                                        "label": "currentPlace"
                                    },
                                    "requestedTransition": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": false,
                                        "id": "requestedTransition",
                                        "label": "requestedTransition"
                                    },
                                    "eligibleTransitions": {
                                        "id": "eligibleTransitions",
                                        "label": "eligibleTransitions"
                                    }
                                },
                                "title": "Landlord Renewal contracts",
                                "resourceName": "landlord_renewal_contracts"
                            },
                            "resourceName": "landlord_renewal_contracts",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "landlordContract",
                            "label": "landlordContract"
                        },
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "xeroContactId": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "xeroContactId",
                            "label": "xeroContactId"
                        }
                    },
                    "title": "Renewal Landlord Tenancies",
                    "resourceName": "renewal_landlord_tenancies"
                },
                "resourceName": "renewal_landlord_tenancies",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "renewals",
                "label": "renewals"
            },
            "activeTenancy": {
                "targetClass": "App\\Entity\\LandlordTenancies\\LandlordTenancy",
                "type": "embedded_single",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "xeroContactId": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "xeroContactId",
                            "label": "xeroContactId"
                        },
                        "rent": {
                            "type": "integer",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "rent",
                            "label": "rent"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordTenancyPlaces",
                            "optionsName": "VALUES",
                            "type": "enum",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "created",
                                    "label": "Created"
                                },
                                {
                                    "id": "holding_deposit_created",
                                    "label": "Holding Deposit Created"
                                },
                                {
                                    "id": "contract_created",
                                    "label": "Contract Created"
                                },
                                {
                                    "id": "ready",
                                    "label": "Ready"
                                },
                                {
                                    "id": "active",
                                    "label": "Active"
                                },
                                {
                                    "id": "expired",
                                    "label": "Expired"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Landlord Tenancies",
                    "resourceName": "landlord_tenancies"
                },
                "resourceName": "landlord_tenancies",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "activeTenancy",
                "label": "activeTenancy"
            },
            "currentPlace": {
                "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordRelationshipPlaces",
                "optionsName": "VALUES",
                "type": "enum_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": "created",
                        "label": "Created"
                    },
                    {
                        "id": "basic_details_set",
                        "label": "Basic details set"
                    },
                    {
                        "id": "pre_approved",
                        "label": "Pre-approved"
                    },
                    {
                        "id": "rejected",
                        "label": "Rejected"
                    },
                    {
                        "id": "negotiation_approved",
                        "label": "Negotiation approved"
                    },
                    {
                        "id": "post_approved",
                        "label": "Post approved"
                    },
                    {
                        "id": "approved",
                        "label": "Approved"
                    },
                    {
                        "id": "active",
                        "label": "Active"
                    },
                    {
                        "id": "expired",
                        "label": "Expired"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "requestedTransition": {
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Landlord Relationships",
        "resourceName": "landlord_relationships"
    },
    "first_landlord_tenancies": {
        "model": [],
        "title": "First Landlord Tenancies",
        "resourceName": "first_landlord_tenancies"
    },
    "landlord_tenancies": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "xeroContactId": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "xeroContactId",
                "label": "xeroContactId"
            },
            "currentPlace": {
                "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordTenancyPlaces",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": "created",
                        "label": "Created"
                    },
                    {
                        "id": "holding_deposit_created",
                        "label": "Holding Deposit Created"
                    },
                    {
                        "id": "contract_created",
                        "label": "Contract Created"
                    },
                    {
                        "id": "ready",
                        "label": "Ready"
                    },
                    {
                        "id": "active",
                        "label": "Active"
                    },
                    {
                        "id": "expired",
                        "label": "Expired"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "requestedTransition": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Landlord Tenancies",
        "resourceName": "landlord_tenancies"
    },
    "renewal_landlord_tenancies": {
        "model": {
            "landlordRelationship": {
                "targetClass": "App\\Entity\\LandlordRelationship",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordRelationshipPlaces",
                            "optionsName": "VALUES",
                            "type": "enum_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "created",
                                    "label": "Created"
                                },
                                {
                                    "id": "basic_details_set",
                                    "label": "Basic details set"
                                },
                                {
                                    "id": "pre_approved",
                                    "label": "Pre-approved"
                                },
                                {
                                    "id": "rejected",
                                    "label": "Rejected"
                                },
                                {
                                    "id": "negotiation_approved",
                                    "label": "Negotiation approved"
                                },
                                {
                                    "id": "post_approved",
                                    "label": "Post approved"
                                },
                                {
                                    "id": "approved",
                                    "label": "Approved"
                                },
                                {
                                    "id": "active",
                                    "label": "Active"
                                },
                                {
                                    "id": "expired",
                                    "label": "Expired"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Landlord Relationships",
                    "resourceName": "landlord_relationships"
                },
                "resourceName": "landlord_relationships",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "landlordRelationship",
                "label": "landlordRelationship"
            },
            "rent": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "rent",
                "label": "rent"
            },
            "landlordContract": {
                "targetClass": "App\\Entity\\Contracts\\LandlordRenewalContract",
                "type": "embedded_single",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "unsignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "unsignedFile",
                            "label": "unsignedFile"
                        },
                        "issuerSignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "issuerSignedFile",
                            "label": "issuerSignedFile"
                        },
                        "beneficiarySignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "beneficiarySignedFile",
                            "label": "beneficiarySignedFile"
                        },
                        "startDate": {
                            "type": "date",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "startDate",
                            "label": "startDate"
                        },
                        "currentPlace": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Landlord Renewal contracts",
                    "resourceName": "landlord_renewal_contracts"
                },
                "resourceName": "landlord_renewal_contracts",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "landlordContract",
                "label": "landlordContract"
            },
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            }
        },
        "title": "Renewal Landlord Tenancies",
        "resourceName": "renewal_landlord_tenancies"
    },
    "areas": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            },
            "properties": {
                "targetClass": "App\\Entity\\Properties\\Property",
                "type": "embedded_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": {
                        "floorplans": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "floorplans",
                            "label": "floorplans"
                        },
                        "images": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "images",
                            "label": "images"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\PropertyPlaces",
                            "optionsName": "VALUES",
                            "type": "enum",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "enquired",
                                    "label": "Enquired"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "managed",
                                    "label": "Managed"
                                },
                                {
                                    "id": "not_managed",
                                    "label": "Not Managed"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Properties",
                    "resourceName": "properties"
                },
                "resourceName": "properties",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "properties",
                "label": "properties"
            },
            "city": {
                "targetClass": "App\\Entity\\Localization\\City",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        }
                    },
                    "title": "Cities",
                    "resourceName": "cities"
                },
                "resourceName": "cities",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "city",
                "label": "city"
            }
        },
        "title": "Areas",
        "resourceName": "areas"
    },
    "cities": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            }
        },
        "title": "Cities",
        "resourceName": "cities"
    },
    "countries": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            }
        },
        "title": "Countries",
        "resourceName": "countries"
    },
    "counties": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            },
            "city": {
                "targetClass": "App\\Entity\\Localization\\City",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": false,
                "resource": {
                    "model": [],
                    "title": "Cities",
                    "resourceName": "cities"
                },
                "resourceName": "cities",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "city",
                "label": "city"
            }
        },
        "title": "Counties",
        "resourceName": "counties"
    },
    "neighborhoods": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            },
            "city": {
                "id": "city",
                "label": "city"
            }
        },
        "title": "Neighborhoods",
        "resourceName": "neighborhoods"
    },
    "postcodes": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "postcode": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "postcode",
                "label": "postcode"
            },
            "city": {
                "targetClass": "App\\Entity\\Localization\\City",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "name",
                            "label": "name"
                        }
                    },
                    "title": "Cities",
                    "resourceName": "cities"
                },
                "resourceName": "cities",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "city",
                "label": "city"
            }
        },
        "title": "Postcodes",
        "resourceName": "postcodes"
    },
    "portals": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            },
            "discount": {
                "type": "integer",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "discount",
                "label": "discount"
            },
            "url": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "url",
                "label": "url"
            },
            "units": {
                "targetClass": "App\\Entity\\Marketing\\PortalUnit",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Portal Unit",
                    "resourceName": "portal_units"
                },
                "resourceName": "portal_units",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "units",
                "label": "units"
            },
            "isPushIntegration": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "isPushIntegration",
                "label": "isPushIntegration"
            }
        },
        "title": "Portal",
        "resourceName": "portals"
    },
    "portal_units": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "portal": {
                "targetClass": "App\\Entity\\Marketing\\Portal",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Portal",
                    "resourceName": "portals"
                },
                "resourceName": "portals",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "portal",
                "label": "portal"
            },
            "unit": {
                "targetClass": "App\\Entity\\Units\\Unit",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "images": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "images",
                            "label": "images"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\UnitPlaces",
                            "optionsName": "VALUES",
                            "type": "enum_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "enquired",
                                    "label": "Enquired"
                                },
                                {
                                    "id": "available_to_let",
                                    "label": "Available to let"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "let",
                                    "label": "Let"
                                },
                                {
                                    "id": "unavailable_to_let",
                                    "label": "Unavailable"
                                },
                                {
                                    "id": "under_offer",
                                    "label": "Under Offer"
                                },
                                {
                                    "id": "managed",
                                    "label": "Managed"
                                },
                                {
                                    "id": "not_managed",
                                    "label": "Unmanaged"
                                },
                                {
                                    "id": "vacant",
                                    "label": "Vacant"
                                },
                                {
                                    "id": "occupied",
                                    "label": "Occupied"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Units",
                    "resourceName": "units"
                },
                "resourceName": "units",
                "optionText": "reference",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "unit",
                "label": "unit"
            },
            "unitDiscount": {
                "type": "integer",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "unitDiscount",
                "label": "unitDiscount"
            },
            "isActive": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "isActive",
                "label": "isActive"
            }
        },
        "title": "Portal Unit",
        "resourceName": "portal_units"
    },
    "notifications": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "url": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "url",
                "label": "url"
            },
            "subject": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "subject",
                "label": "subject"
            },
            "text": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "text",
                "label": "text"
            },
            "sentAt": {
                "type": "date",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "sentAt",
                "label": "sentAt"
            },
            "users": {
                "id": "users",
                "label": "users"
            },
            "path": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "path",
                "label": "path"
            }
        },
        "title": "Notifications",
        "resourceName": "notifications"
    },
    "notification_users": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "readAt": {
                "type": "date",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "readAt",
                "label": "readAt"
            },
            "notification": {
                "targetClass": "App\\Entity\\Notification\\Notification",
                "type": "reference",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "url": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "url",
                            "label": "url"
                        },
                        "subject": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "subject",
                            "label": "subject"
                        },
                        "text": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "text",
                            "label": "text"
                        },
                        "sentAt": {
                            "type": "date",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "sentAt",
                            "label": "sentAt"
                        },
                        "path": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "path",
                            "label": "path"
                        }
                    },
                    "title": "Notifications",
                    "resourceName": "notifications"
                },
                "resourceName": "notifications",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "notification",
                "label": "notification"
            },
            "isNew": {
                "id": "isNew",
                "label": "isNew"
            }
        },
        "title": "User Notifications",
        "resourceName": "notification_users"
    },
    "additional_payment_item_fields": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "name",
                "label": "name"
            },
            "optionText": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "optionText",
                "label": "optionText"
            }
        },
        "title": "Additional Payment Item Fields",
        "resourceName": "additional_payment_item_fields"
    },
    "deduction": {
        "model": {
            "landlordTenancy": {
                "targetClass": "App\\Entity\\LandlordTenancies\\LandlordTenancy",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordTenancyPlaces",
                            "optionsName": "VALUES",
                            "type": "enum",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "created",
                                    "label": "Created"
                                },
                                {
                                    "id": "holding_deposit_created",
                                    "label": "Holding Deposit Created"
                                },
                                {
                                    "id": "contract_created",
                                    "label": "Contract Created"
                                },
                                {
                                    "id": "ready",
                                    "label": "Ready"
                                },
                                {
                                    "id": "active",
                                    "label": "Active"
                                },
                                {
                                    "id": "expired",
                                    "label": "Expired"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Landlord Tenancies",
                    "resourceName": "landlord_tenancies"
                },
                "resourceName": "landlord_tenancies",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "landlordTenancy",
                "label": "landlordTenancy"
            },
            "fromDate": {
                "type": "date",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "fromDate",
                "label": "fromDate"
            },
            "toDate": {
                "type": "date",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "toDate",
                "label": "toDate"
            },
            "discount": {
                "type": "integer",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "discount",
                "label": "discount"
            }
        },
        "title": "Deduction",
        "resourceName": "deduction"
    },
    "default_payment_items": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "name",
                "label": "name"
            },
            "fee": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "fee",
                "label": "fee"
            },
            "category": {
                "targetClass": "App\\Model\\Enum\\Payment\\DefaultPaymentItemCategory",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "All"
                    },
                    {
                        "id": 1,
                        "label": "Landlord"
                    },
                    {
                        "id": 2,
                        "label": "Tenant"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "category",
                "label": "category"
            },
            "type": {
                "targetClass": "App\\Model\\Enum\\Payment\\DefaultPaymentItemType",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "System"
                    },
                    {
                        "id": 1,
                        "label": "Default"
                    },
                    {
                        "id": 2,
                        "label": "Custom"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "type",
                "label": "type"
            }
        },
        "title": "Default Payment Items",
        "resourceName": "default_payment_items"
    },
    "payments": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "fee": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "fee",
                "label": "fee"
            },
            "dueDate": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "dueDate",
                "label": "dueDate"
            },
            "status": {
                "targetClass": "App\\Model\\Enum\\Payment\\PaymentStatus",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "Draft"
                    },
                    {
                        "id": 1,
                        "label": "To be paid"
                    },
                    {
                        "id": 2,
                        "label": "Authorised"
                    },
                    {
                        "id": 3,
                        "label": "Paid"
                    },
                    {
                        "id": 4,
                        "label": "Voided"
                    },
                    {
                        "id": 5,
                        "label": "Deleted"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "status",
                "label": "status"
            },
            "type": {
                "targetClass": "App\\Model\\Enum\\Payment\\PaymentType",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "Ingoing"
                    },
                    {
                        "id": 1,
                        "label": "Outgoing"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "type",
                "label": "type"
            },
            "xeroInvoiceId": {
                "type": "string",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "xeroInvoiceId",
                "label": "xeroInvoiceId"
            },
            "paymentItems": {
                "targetClass": "App\\Entity\\Payments\\PaymentItem",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "description": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "description",
                            "label": "description"
                        },
                        "quantity": {
                            "id": "quantity",
                            "label": "quantity"
                        },
                        "unitAmount": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "unitAmount",
                            "label": "unitAmount"
                        },
                        "lineItemId": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "lineItemId",
                            "label": "lineItemId"
                        },
                        "taxType": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "taxType",
                            "label": "taxType"
                        },
                        "taxAmount": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "taxAmount",
                            "label": "taxAmount"
                        },
                        "discountRate": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "discountRate",
                            "label": "discountRate"
                        },
                        "additionalPaymentItemFields": {
                            "targetClass": "App\\Entity\\Payments\\AdditionalPaymentItemField",
                            "type": "embedded_multiple",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "name": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "name",
                                        "label": "name"
                                    },
                                    "optionText": {
                                        "type": "string",
                                        "nullable": true,
                                        "write": true,
                                        "read": true,
                                        "id": "optionText",
                                        "label": "optionText"
                                    }
                                },
                                "title": "Additional Payment Item Fields",
                                "resourceName": "additional_payment_item_fields"
                            },
                            "resourceName": "additional_payment_item_fields",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "additionalPaymentItemFields",
                            "label": "additionalPaymentItemFields"
                        },
                        "paymentItemCategory": {
                            "targetClass": "App\\Entity\\Payments\\PaymentItemCategory",
                            "type": "reference",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Payment Items Category",
                                "resourceName": "payment_item_categories"
                            },
                            "resourceName": "payment_item_categories",
                            "optionText": "description",
                            "id": "paymentItemCategory",
                            "label": "paymentItemCategory"
                        }
                    },
                    "title": "Payment Items",
                    "resourceName": "payment_items"
                },
                "resourceName": "payment_items",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "paymentItems",
                "label": "paymentItems"
            },
            "payableAmount": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "payableAmount",
                "label": "payableAmount"
            }
        },
        "title": "Payments",
        "resourceName": "payments"
    },
    "payment_items": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "description": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "description",
                "label": "description"
            },
            "quantity": {
                "id": "quantity",
                "label": "quantity"
            },
            "unitAmount": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "unitAmount",
                "label": "unitAmount"
            },
            "lineItemId": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "lineItemId",
                "label": "lineItemId"
            },
            "taxType": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "taxType",
                "label": "taxType"
            },
            "taxAmount": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "taxAmount",
                "label": "taxAmount"
            },
            "discountRate": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "discountRate",
                "label": "discountRate"
            },
            "additionalPaymentItemFields": {
                "targetClass": "App\\Entity\\Payments\\AdditionalPaymentItemField",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "name",
                            "label": "name"
                        },
                        "optionText": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "optionText",
                            "label": "optionText"
                        }
                    },
                    "title": "Additional Payment Item Fields",
                    "resourceName": "additional_payment_item_fields"
                },
                "resourceName": "additional_payment_item_fields",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "additionalPaymentItemFields",
                "label": "additionalPaymentItemFields"
            },
            "payment": {
                "targetClass": "App\\Entity\\Payments\\Payment",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Payments",
                    "resourceName": "payments"
                },
                "resourceName": "payments",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "payment",
                "label": "payment"
            },
            "paymentItemCategory": {
                "targetClass": "App\\Entity\\Payments\\PaymentItemCategory",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Payment Items Category",
                    "resourceName": "payment_item_categories"
                },
                "resourceName": "payment_item_categories",
                "optionText": "description",
                "id": "paymentItemCategory",
                "label": "paymentItemCategory"
            }
        },
        "title": "Payment Items",
        "resourceName": "payment_items"
    },
    "payment_item_categories": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "description": {
                "type": "string",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "description",
                "label": "description"
            },
            "code": {
                "type": "string",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "code",
                "label": "code"
            }
        },
        "title": "Payment Items Category",
        "resourceName": "payment_item_categories"
    },
    "landlord_tenancy_payments": {
        "model": {
            "landlordContract": {
                "targetClass": "App\\Entity\\Contracts\\LandlordContract",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "witnessSignedFile": {
                            "type": "file_single",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "witnessSignedFile",
                            "label": "witnessSignedFile"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordContractPlaces",
                            "optionsName": "VALUES",
                            "type": "enum",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "created",
                                    "label": "Created"
                                },
                                {
                                    "id": "flow_type_chosen",
                                    "label": "Flow Chosen"
                                },
                                {
                                    "id": "data_uploaded",
                                    "label": "Data Uploaded"
                                },
                                {
                                    "id": "unsigned_uploaded",
                                    "label": "Unsigned Uploaded"
                                },
                                {
                                    "id": "beneficiary_uploaded",
                                    "label": "Beneficiary Uploaded"
                                },
                                {
                                    "id": "issuer_uploaded",
                                    "label": "Issuer Uploaded"
                                },
                                {
                                    "id": "finalized",
                                    "label": "Finalized"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "unsignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "unsignedFile",
                            "label": "unsignedFile"
                        },
                        "issuerSignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "issuerSignedFile",
                            "label": "issuerSignedFile"
                        },
                        "beneficiarySignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "beneficiarySignedFile",
                            "label": "beneficiarySignedFile"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Landlord Contracts",
                    "resourceName": "landlord_contracts"
                },
                "resourceName": "landlord_contracts",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "landlordContract",
                "label": "landlordContract"
            },
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "fee": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "fee",
                "label": "fee"
            },
            "dueDate": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "dueDate",
                "label": "dueDate"
            },
            "status": {
                "targetClass": "App\\Model\\Enum\\Payment\\PaymentStatus",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "Draft"
                    },
                    {
                        "id": 1,
                        "label": "To be paid"
                    },
                    {
                        "id": 2,
                        "label": "Authorised"
                    },
                    {
                        "id": 3,
                        "label": "Paid"
                    },
                    {
                        "id": 4,
                        "label": "Voided"
                    },
                    {
                        "id": 5,
                        "label": "Deleted"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "status",
                "label": "status"
            },
            "type": {
                "targetClass": "App\\Model\\Enum\\Payment\\PaymentType",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "Ingoing"
                    },
                    {
                        "id": 1,
                        "label": "Outgoing"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "type",
                "label": "type"
            },
            "xeroInvoiceId": {
                "type": "string",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "xeroInvoiceId",
                "label": "xeroInvoiceId"
            },
            "paymentItems": {
                "targetClass": "App\\Entity\\Payments\\PaymentItem",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "description": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "description",
                            "label": "description"
                        },
                        "quantity": {
                            "id": "quantity",
                            "label": "quantity"
                        },
                        "unitAmount": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "unitAmount",
                            "label": "unitAmount"
                        },
                        "lineItemId": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "lineItemId",
                            "label": "lineItemId"
                        },
                        "taxType": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "taxType",
                            "label": "taxType"
                        },
                        "taxAmount": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "taxAmount",
                            "label": "taxAmount"
                        },
                        "discountRate": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "discountRate",
                            "label": "discountRate"
                        },
                        "paymentItemCategory": {
                            "targetClass": "App\\Entity\\Payments\\PaymentItemCategory",
                            "type": "reference",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Payment Items Category",
                                "resourceName": "payment_item_categories"
                            },
                            "resourceName": "payment_item_categories",
                            "optionText": "description",
                            "id": "paymentItemCategory",
                            "label": "paymentItemCategory"
                        }
                    },
                    "title": "Payment Items",
                    "resourceName": "payment_items"
                },
                "resourceName": "payment_items",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "paymentItems",
                "label": "paymentItems"
            },
            "payableAmount": {
                "type": "integer",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "payableAmount",
                "label": "payableAmount"
            }
        },
        "title": "Landlord Tenancy Payments",
        "resourceName": "landlord_tenancy_payments"
    },
    "tenant_tenancy_payments": {
        "model": {
            "tenantContract": {
                "targetClass": "App\\Entity\\Contracts\\TenantContract",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": false,
                "resource": {
                    "model": {
                        "witnessSignedFile": {
                            "type": "file_single",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "witnessSignedFile",
                            "label": "witnessSignedFile"
                        },
                        "unsignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "unsignedFile",
                            "label": "unsignedFile"
                        },
                        "issuerSignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "issuerSignedFile",
                            "label": "issuerSignedFile"
                        },
                        "beneficiarySignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "beneficiarySignedFile",
                            "label": "beneficiarySignedFile"
                        }
                    },
                    "title": "Tenant Contracts",
                    "resourceName": "tenant_contracts"
                },
                "resourceName": "tenant_contracts",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "tenantContract",
                "label": "tenantContract"
            }
        },
        "title": "Tenant Tenancy Payments",
        "resourceName": "tenant_tenancy_payments"
    },
    "personal_datas": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "name",
                "label": "name"
            },
            "surname": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "surname",
                "label": "surname"
            },
            "address1": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "address1",
                "label": "address1"
            },
            "address2": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "address2",
                "label": "address2"
            },
            "postcode": {
                "targetClass": "App\\Entity\\Localization\\Postcode",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "postcode": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "postcode",
                            "label": "postcode"
                        }
                    },
                    "title": "Postcodes",
                    "resourceName": "postcodes"
                },
                "resourceName": "postcodes",
                "optionText": "postcode",
                "id": "postcode",
                "label": "postcode"
            },
            "postcode2": {
                "targetClass": "App\\Entity\\Localization\\Postcode",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "postcode": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "postcode",
                            "label": "postcode"
                        }
                    },
                    "title": "Postcodes",
                    "resourceName": "postcodes"
                },
                "resourceName": "postcodes",
                "optionText": "postcode",
                "id": "postcode2",
                "label": "postcode2"
            },
            "email": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "email",
                "label": "email"
            },
            "telephone": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "telephone",
                "label": "telephone"
            },
            "mobile": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "mobile",
                "label": "mobile"
            },
            "nino": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "nino",
                "label": "nino"
            }
        },
        "title": "Personal Data",
        "resourceName": "personal_datas"
    },
    "kitchens": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "diningArea": {
                "type": "boolean",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "diningArea",
                "label": "diningArea"
            },
            "washingMachine": {
                "type": "boolean",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "washingMachine",
                "label": "washingMachine"
            },
            "tumbleDryer": {
                "type": "boolean",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "tumbleDryer",
                "label": "tumbleDryer"
            },
            "microwave": {
                "type": "boolean",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "microwave",
                "label": "microwave"
            },
            "dishwasher": {
                "type": "boolean",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "dishwasher",
                "label": "dishwasher"
            }
        },
        "title": "Kitchens",
        "resourceName": "kitchens"
    },
    "living_rooms": {
        "model": {
            "sofa": {
                "type": "boolean",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "sofa",
                "label": "sofa"
            }
        },
        "title": "Living Rooms",
        "resourceName": "living_rooms"
    },
    "properties": {
        "filters": {
            "text": [
                "address",
                "agent",
                "area",
                "arthurProperty.id"
            ],
            "enum": [
                "currentPlace"
            ],
            "boolean": [
                "hmo"
            ]
        },
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "service": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "service",
                "label": "service"
            },
            "hmo": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "hmo",
                "label": "hmo"
            },
            "type": {
                "targetClass": "App\\Entity\\Properties\\PropertyType",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "description": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "description",
                            "label": "description"
                        }
                    },
                    "title": "Property Types",
                    "resourceName": "property_types"
                },
                "resourceName": "property_types",
                "optionText": "description",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "type",
                "label": "type"
            },
            "agent": {
                "targetClass": "App\\Entity\\Agent",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "fullName": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "fullName",
                            "label": "fullName"
                        }
                    },
                    "title": "Agents",
                    "resourceName": "agents"
                },
                "resourceName": "agents",
                "optionText": "fullName",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "agent",
                "label": "agent"
            },
            "propertyName": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "propertyName",
                "label": "propertyName"
            },
            "address": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "address",
                "label": "address"
            },
            "rentableUnits": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "rentableUnits",
                "label": "rentableUnits"
            },
            "maximumOccupancy": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "maximumOccupancy",
                "label": "maximumOccupancy"
            },
            "bathrooms": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "bathrooms",
                "label": "bathrooms"
            },
            "floors": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "floors",
                "label": "floors"
            },
            "bedrooms": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "bedrooms",
                "label": "bedrooms"
            },
            "receptions": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "receptions",
                "label": "receptions"
            },
            "hasPartition": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "hasPartition",
                "label": "hasPartition"
            },
            "floorplans": {
                "type": "file_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "floorplans",
                "label": "floorplans"
            },
            "partitionLocation": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "partitionLocation",
                "label": "partitionLocation"
            },
            "separateToilet": {
                "type": "integer",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "separateToilet",
                "label": "separateToilet"
            },
            "parking": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "parking",
                "label": "parking"
            },
            "concierge": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "concierge",
                "label": "concierge"
            },
            "lift": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "lift",
                "label": "lift"
            },
            "floorNumber": {
                "type": "integer",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "floorNumber",
                "label": "floorNumber"
            },
            "gym": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "gym",
                "label": "gym"
            },
            "spa": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "spa",
                "label": "spa"
            },
            "sharedBPG": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "sharedBPG",
                "label": "sharedBPG"
            },
            "woodenFloors": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "woodenFloors",
                "label": "woodenFloors"
            },
            "carpet": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "carpet",
                "label": "carpet"
            },
            "smokeAlarm": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "smokeAlarm",
                "label": "smokeAlarm"
            },
            "CODetector": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "CODetector",
                "label": "CODetector"
            },
            "storageRoom": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "storageRoom",
                "label": "storageRoom"
            },
            "longitude": {
                "type": "float",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "longitude",
                "label": "longitude"
            },
            "latitude": {
                "type": "float",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "latitude",
                "label": "latitude"
            },
            "livingRoom": {
                "targetClass": "App\\Entity\\Properties\\LivingRoom",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "diningArea": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "diningArea",
                            "label": "diningArea"
                        },
                        "sofa": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "sofa",
                            "label": "sofa"
                        },
                        "TV": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "TV",
                            "label": "TV"
                        },
                        "coffeeTable": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "coffeeTable",
                            "label": "coffeeTable"
                        }
                    },
                    "title": "Living Rooms",
                    "resourceName": "living_rooms"
                },
                "resourceName": "living_rooms",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "livingRoom",
                "label": "livingRoom"
            },
            "kitchen": {
                "targetClass": "App\\Entity\\Properties\\Kitchen",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "diningArea": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "diningArea",
                            "label": "diningArea"
                        },
                        "washingMachine": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "washingMachine",
                            "label": "washingMachine"
                        },
                        "tumbleDryer": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "tumbleDryer",
                            "label": "tumbleDryer"
                        },
                        "microwave": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "microwave",
                            "label": "microwave"
                        },
                        "dishwasher": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "dishwasher",
                            "label": "dishwasher"
                        }
                    },
                    "title": "Kitchens",
                    "resourceName": "kitchens"
                },
                "resourceName": "kitchens",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "kitchen",
                "label": "kitchen"
            },
            "country": {
                "targetClass": "App\\Entity\\Localization\\Country",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "name",
                            "label": "name"
                        }
                    },
                    "title": "Countries",
                    "resourceName": "countries"
                },
                "resourceName": "countries",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "country",
                "label": "country"
            },
            "city": {
                "targetClass": "App\\Entity\\Localization\\City",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "name",
                            "label": "name"
                        }
                    },
                    "title": "Cities",
                    "resourceName": "cities"
                },
                "resourceName": "cities",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "city",
                "label": "city"
            },
            "county": {
                "targetClass": "App\\Entity\\Localization\\County",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "name",
                            "label": "name"
                        }
                    },
                    "title": "Counties",
                    "resourceName": "counties"
                },
                "resourceName": "counties",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "county",
                "label": "county"
            },
            "area": {
                "targetClass": "App\\Entity\\Localization\\Area",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "name",
                            "label": "name"
                        }
                    },
                    "title": "Areas",
                    "resourceName": "areas"
                },
                "resourceName": "areas",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "area",
                "label": "area"
            },
            "neighborhood": {
                "targetClass": "App\\Entity\\Localization\\Neighborhood",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "name",
                            "label": "name"
                        }
                    },
                    "title": "Neighborhoods",
                    "resourceName": "neighborhoods"
                },
                "resourceName": "neighborhoods",
                "optionText": "name",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "neighborhood",
                "label": "neighborhood"
            },
            "postcode": {
                "targetClass": "App\\Entity\\Localization\\Postcode",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "postcode": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "postcode",
                            "label": "postcode"
                        }
                    },
                    "title": "Postcodes",
                    "resourceName": "postcodes"
                },
                "resourceName": "postcodes",
                "optionText": "postcode",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "postcode",
                "label": "postcode"
            },
            "utilities": {
                "targetClass": "App\\Entity\\Properties\\Utility",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "name",
                            "label": "name"
                        }
                    },
                    "title": "Utilities",
                    "resourceName": "utilities"
                },
                "resourceName": "utilities",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "utilities",
                "label": "utilities"
            },
            "backGarden": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "backGarden",
                "label": "backGarden"
            },
            "communalGarden": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "communalGarden",
                "label": "communalGarden"
            },
            "frontGarden": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "frontGarden",
                "label": "frontGarden"
            },
            "privateGarden": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "privateGarden",
                "label": "privateGarden"
            },
            "terrace": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "terrace",
                "label": "terrace"
            },
            "patio": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "patio",
                "label": "patio"
            },
            "sharedBathroom": {
                "targetClass": "App\\Entity\\Properties\\SharedBathroom",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "bathOrShower": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "bathOrShower",
                            "label": "bathOrShower"
                        },
                        "mirror": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "mirror",
                            "label": "mirror"
                        },
                        "bathCurtain": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "bathCurtain",
                            "label": "bathCurtain"
                        },
                        "window": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "window",
                            "label": "window"
                        },
                        "jacuzzi": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "jacuzzi",
                            "label": "jacuzzi"
                        }
                    },
                    "title": "Shared Bathrooms",
                    "resourceName": "shared_bathrooms"
                },
                "resourceName": "shared_bathrooms",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "sharedBathroom",
                "label": "sharedBathroom"
            },
            "images": {
                "type": "file_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "images",
                "label": "images"
            },
            "units": {
                "targetClass": "App\\Entity\\Units\\Unit",
                "type": "embedded_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "unitLetter": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "unitLetter",
                            "label": "unitLetter"
                        },
                        "type": {
                            "targetClass": "App\\Entity\\Units\\UnitType",
                            "type": "reference",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "resource": {
                                "model": {
                                    "description": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "description",
                                        "label": "description"
                                    }
                                },
                                "title": "Unit Types",
                                "resourceName": "unit_types"
                            },
                            "resourceName": "unit_types",
                            "optionText": "description",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "type",
                            "label": "type"
                        },
                        "weeklyPrice": {
                            "type": "money",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "weeklyPrice",
                            "label": "weeklyPrice"
                        },
                        "availableFrom": {
                            "type": "date",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "availableFrom",
                            "label": "availableFrom"
                        },
                        "floorNumber": {
                            "type": "integer",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "floorNumber",
                            "label": "floorNumber"
                        },
                        "images": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "images",
                            "label": "images"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\UnitPlaces",
                            "optionsName": "VALUES",
                            "type": "enum_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "enquired",
                                    "label": "Enquired"
                                },
                                {
                                    "id": "available_to_let",
                                    "label": "Available to let"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "let",
                                    "label": "Let"
                                },
                                {
                                    "id": "unavailable_to_let",
                                    "label": "Unavailable"
                                },
                                {
                                    "id": "under_offer",
                                    "label": "Under Offer"
                                },
                                {
                                    "id": "managed",
                                    "label": "Managed"
                                },
                                {
                                    "id": "not_managed",
                                    "label": "Unmanaged"
                                },
                                {
                                    "id": "vacant",
                                    "label": "Vacant"
                                },
                                {
                                    "id": "occupied",
                                    "label": "Occupied"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Units",
                    "resourceName": "units"
                },
                "resourceName": "units",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "units",
                "label": "units"
            },
            "askedMonthlyPrice": {
                "type": "integer",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "askedMonthlyPrice",
                "label": "askedMonthlyPrice"
            },
            "landlordRelationships": {
                "targetClass": "App\\Entity\\LandlordRelationship",
                "type": "embedded_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": {
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\Landlord\\LandlordRelationshipPlaces",
                            "optionsName": "VALUES",
                            "type": "enum_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "created",
                                    "label": "Created"
                                },
                                {
                                    "id": "basic_details_set",
                                    "label": "Basic details set"
                                },
                                {
                                    "id": "pre_approved",
                                    "label": "Pre-approved"
                                },
                                {
                                    "id": "rejected",
                                    "label": "Rejected"
                                },
                                {
                                    "id": "negotiation_approved",
                                    "label": "Negotiation approved"
                                },
                                {
                                    "id": "post_approved",
                                    "label": "Post approved"
                                },
                                {
                                    "id": "approved",
                                    "label": "Approved"
                                },
                                {
                                    "id": "active",
                                    "label": "Active"
                                },
                                {
                                    "id": "expired",
                                    "label": "Expired"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Landlord Relationships",
                    "resourceName": "landlord_relationships"
                },
                "resourceName": "landlord_relationships",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "landlordRelationships",
                "label": "landlordRelationships"
            },
            "arthurProperty": {
                "targetClass": "App\\Entity\\Units\\Unit",
                "type": "embedded_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "unitLetter": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "unitLetter",
                            "label": "unitLetter"
                        },
                        "type": {
                            "targetClass": "App\\Entity\\Units\\UnitType",
                            "type": "reference",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "resource": {
                                "model": {
                                    "description": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "description",
                                        "label": "description"
                                    }
                                },
                                "title": "Unit Types",
                                "resourceName": "unit_types"
                            },
                            "resourceName": "unit_types",
                            "optionText": "description",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "type",
                            "label": "type"
                        },
                        "weeklyPrice": {
                            "type": "money",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "weeklyPrice",
                            "label": "weeklyPrice"
                        },
                        "availableFrom": {
                            "type": "date",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "availableFrom",
                            "label": "availableFrom"
                        },
                        "floorNumber": {
                            "type": "integer",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "floorNumber",
                            "label": "floorNumber"
                        },
                        "images": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "images",
                            "label": "images"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\UnitPlaces",
                            "optionsName": "VALUES",
                            "type": "enum_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "enquired",
                                    "label": "Enquired"
                                },
                                {
                                    "id": "available_to_let",
                                    "label": "Available to let"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "let",
                                    "label": "Let"
                                },
                                {
                                    "id": "unavailable_to_let",
                                    "label": "Unavailable"
                                },
                                {
                                    "id": "under_offer",
                                    "label": "Under Offer"
                                },
                                {
                                    "id": "managed",
                                    "label": "Managed"
                                },
                                {
                                    "id": "not_managed",
                                    "label": "Unmanaged"
                                },
                                {
                                    "id": "vacant",
                                    "label": "Vacant"
                                },
                                {
                                    "id": "occupied",
                                    "label": "Occupied"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Units",
                    "resourceName": "units"
                },
                "resourceName": "units",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "arthurProperty",
                "label": "arthurProperty"
            },
            "tubeStation": {
                "id": "tubeStation",
                "label": "tubeStation"
            },
            "currentPlace": {
                "targetClass": "App\\Model\\Enum\\Places\\PropertyPlaces",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": "enquired",
                        "label": "Enquired"
                    },
                    {
                        "id": "discarded",
                        "label": "Discarded"
                    },
                    {
                        "id": "managed",
                        "label": "Managed"
                    },
                    {
                        "id": "not_managed",
                        "label": "Not Managed"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "hasTopUp": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "hasTopUp",
                "label": "hasTopUp"
            },
            "requestedTransition": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": false,
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Properties",
        "resourceName": "properties"
    },
    "property_types": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "description": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "description",
                "label": "description"
            }
        },
        "title": "Property Types",
        "resourceName": "property_types"
    },
    "shared_bathrooms": {
        "model": [],
        "title": "Shared Bathrooms",
        "resourceName": "shared_bathrooms"
    },
    "tube_station": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "name",
                "label": "name"
            }
        },
        "title": "Tube Station",
        "resourceName": "tube_station"
    },
    "utilities": {
        "model": [],
        "title": "Utilities",
        "resourceName": "utilities"
    },
    "tenants": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "mainContact": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "mainContact",
                "label": "mainContact"
            },
            "personalData": {
                "targetClass": "App\\Entity\\PersonalData",
                "type": "embedded_single",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "name": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "name",
                            "label": "name"
                        },
                        "surname": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "surname",
                            "label": "surname"
                        },
                        "address1": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "address1",
                            "label": "address1"
                        },
                        "address2": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "address2",
                            "label": "address2"
                        },
                        "postcode": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "id": "postcode",
                            "label": "postcode"
                        },
                        "postcode2": {
                            "targetClass": "App\\Entity\\Localization\\Postcode",
                            "type": "reference",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": [],
                                "title": "Postcodes",
                                "resourceName": "postcodes"
                            },
                            "resourceName": "postcodes",
                            "optionText": "postcode",
                            "id": "postcode2",
                            "label": "postcode2"
                        },
                        "email": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "email",
                            "label": "email"
                        },
                        "telephone": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "telephone",
                            "label": "telephone"
                        },
                        "mobile": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "mobile",
                            "label": "mobile"
                        },
                        "nino": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": true,
                            "id": "nino",
                            "label": "nino"
                        }
                    },
                    "title": "Personal Data",
                    "resourceName": "personal_datas"
                },
                "resourceName": "personal_datas",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "personalData",
                "label": "personalData"
            },
            "passport": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "passport",
                "label": "passport"
            },
            "visa": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "visa",
                "label": "visa"
            },
            "rightToRent": {
                "type": "file_single",
                "nullable": true,
                "write": false,
                "read": true,
                "id": "rightToRent",
                "label": "rightToRent"
            }
        },
        "title": "Tenants",
        "resourceName": "tenants"
    },
    "tenant_relationships": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "tenant": {
                "targetClass": "App\\Entity\\Tenant",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "passport": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "passport",
                            "label": "passport"
                        },
                        "visa": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "visa",
                            "label": "visa"
                        },
                        "rightToRent": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "rightToRent",
                            "label": "rightToRent"
                        }
                    },
                    "title": "Tenants",
                    "resourceName": "tenants"
                },
                "resourceName": "tenants",
                "optionText": "id",
                "id": "tenant",
                "label": "tenant"
            },
            "fullAgreementTenancies": {
                "targetClass": "App\\Entity\\TenantTenancies\\FullAgreementTenancy",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "First Tenant Tenancies",
                    "resourceName": "full_agreement_tenancies"
                },
                "resourceName": "full_agreement_tenancies",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "fullAgreementTenancies",
                "label": "fullAgreementTenancies"
            },
            "memorandumTenancies": {
                "targetClass": "App\\Entity\\TenantTenancies\\MemorandumTenancy",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Memorandum Tenant Tenancies",
                    "resourceName": "memorandum_tenancies"
                },
                "resourceName": "memorandum_tenancies",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "memorandumTenancies",
                "label": "memorandumTenancies"
            },
            "enquiry": {
                "targetClass": "App\\Entity\\Enquiry\\Enquiry",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Enquiries",
                    "resourceName": "enquiries"
                },
                "resourceName": "enquiries",
                "optionText": "id",
                "id": "enquiry",
                "label": "enquiry"
            }
        },
        "title": "Tenant Relationships",
        "resourceName": "tenant_relationships"
    },
    "full_agreement_tenancies": {
        "model": [],
        "title": "First Tenant Tenancies",
        "resourceName": "full_agreement_tenancies"
    },
    "memorandum_tenancies": {
        "model": [],
        "title": "Memorandum Tenant Tenancies",
        "resourceName": "memorandum_tenancies"
    },
    "tenant_tenancies": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "tenantContract": {
                "targetClass": "App\\Entity\\Contracts\\TenantContract",
                "type": "embedded_single",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "witnessSignedFile": {
                            "type": "file_single",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "witnessSignedFile",
                            "label": "witnessSignedFile"
                        },
                        "unsignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "unsignedFile",
                            "label": "unsignedFile"
                        },
                        "issuerSignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "issuerSignedFile",
                            "label": "issuerSignedFile"
                        },
                        "beneficiarySignedFile": {
                            "type": "file_single",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "beneficiarySignedFile",
                            "label": "beneficiarySignedFile"
                        }
                    },
                    "title": "Tenant Contracts",
                    "resourceName": "tenant_contracts"
                },
                "resourceName": "tenant_contracts",
                "id": "tenantContract",
                "label": "tenantContract"
            },
            "unit": {
                "targetClass": "App\\Entity\\Units\\Unit",
                "type": "reference",
                "nullable": true,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "images": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "images",
                            "label": "images"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\UnitPlaces",
                            "optionsName": "VALUES",
                            "type": "enum_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "enquired",
                                    "label": "Enquired"
                                },
                                {
                                    "id": "available_to_let",
                                    "label": "Available to let"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "let",
                                    "label": "Let"
                                },
                                {
                                    "id": "unavailable_to_let",
                                    "label": "Unavailable"
                                },
                                {
                                    "id": "under_offer",
                                    "label": "Under Offer"
                                },
                                {
                                    "id": "managed",
                                    "label": "Managed"
                                },
                                {
                                    "id": "not_managed",
                                    "label": "Unmanaged"
                                },
                                {
                                    "id": "vacant",
                                    "label": "Vacant"
                                },
                                {
                                    "id": "occupied",
                                    "label": "Occupied"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Units",
                    "resourceName": "units"
                },
                "resourceName": "units",
                "optionText": "reference",
                "id": "unit",
                "label": "unit"
            },
            "xeroContactId": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "xeroContactId",
                "label": "xeroContactId"
            }
        },
        "title": "Tenant Tenancies",
        "resourceName": "tenant_tenancies"
    },
    "transitions": {
        "model": [],
        "title": "Transitions",
        "resourceName": "transitions"
    },
    "units": {
        "filters": {
            "text": [
                "property",
                "type",
                "arthurUnit.idWp"
            ],
            "boolean": [
                "councilShow"
            ],
            "enum_multiple": [
                "currentPlace"
            ]
        },
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "unitLetter": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "unitLetter",
                "label": "unitLetter"
            },
            "type": {
                "targetClass": "App\\Entity\\Units\\UnitType",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "description": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "description",
                            "label": "description"
                        }
                    },
                    "title": "Unit Types",
                    "resourceName": "unit_types"
                },
                "resourceName": "unit_types",
                "optionText": "description",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "type",
                "label": "type"
            },
            "weeklyPrice": {
                "type": "money",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "weeklyPrice",
                "label": "weeklyPrice"
            },
            "availableFrom": {
                "type": "date",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "availableFrom",
                "label": "availableFrom"
            },
            "property": {
                "targetClass": "App\\Entity\\Properties\\Property",
                "type": "reference",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "propertyName": {
                            "type": "string",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "propertyName",
                            "label": "propertyName"
                        },
                        "floorplans": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "floorplans",
                            "label": "floorplans"
                        },
                        "images": {
                            "type": "file_multiple",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "images",
                            "label": "images"
                        },
                        "currentPlace": {
                            "targetClass": "App\\Model\\Enum\\Places\\PropertyPlaces",
                            "optionsName": "VALUES",
                            "type": "enum",
                            "nullable": false,
                            "write": false,
                            "read": true,
                            "options": [
                                {
                                    "id": "enquired",
                                    "label": "Enquired"
                                },
                                {
                                    "id": "discarded",
                                    "label": "Discarded"
                                },
                                {
                                    "id": "managed",
                                    "label": "Managed"
                                },
                                {
                                    "id": "not_managed",
                                    "label": "Not Managed"
                                }
                            ],
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "currentPlace",
                            "label": "currentPlace"
                        },
                        "requestedTransition": {
                            "type": "string",
                            "nullable": true,
                            "write": true,
                            "read": false,
                            "id": "requestedTransition",
                            "label": "requestedTransition"
                        },
                        "eligibleTransitions": {
                            "id": "eligibleTransitions",
                            "label": "eligibleTransitions"
                        }
                    },
                    "title": "Properties",
                    "resourceName": "properties"
                },
                "resourceName": "properties",
                "optionText": "propertyName",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "property",
                "label": "property"
            },
            "floorNumber": {
                "type": "integer",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "floorNumber",
                "label": "floorNumber"
            },
            "features": {
                "targetClass": "App\\Entity\\Units\\UnitFeatureList",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "feature": {
                            "targetClass": "App\\Entity\\Units\\UnitFeature",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "name": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "name",
                                        "label": "name"
                                    }
                                },
                                "title": "Unit features",
                                "resourceName": "unit_features"
                            },
                            "resourceName": "unit_features",
                            "optionText": "name",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "feature",
                            "label": "feature"
                        },
                        "amount": {
                            "type": "integer",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "amount",
                            "label": "amount"
                        }
                    },
                    "title": "Unit Features Lists",
                    "resourceName": "unit_feature_lists"
                },
                "resourceName": "unit_feature_lists",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "features",
                "label": "features"
            },
            "tenantTenancies": {
                "targetClass": "App\\Entity\\TenantTenancies\\TenantTenancy",
                "type": "embedded_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Tenant Tenancies",
                    "resourceName": "tenant_tenancies"
                },
                "resourceName": "tenant_tenancies",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "tenantTenancies",
                "label": "tenantTenancies"
            },
            "images": {
                "type": "file_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "images",
                "label": "images"
            },
            "arthurUnit": {
                "targetClass": "App\\ThirdPartyIntegration\\Arthur\\Doctrine\\Entity\\ArthurUnit",
                "type": "embedded_single",
                "nullable": true,
                "write": false,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "idWp": {
                            "type": "integer",
                            "nullable": true,
                            "write": false,
                            "read": true,
                            "id": "idWp",
                            "label": "idWp"
                        }
                    },
                    "title": "Arthur Unit",
                    "resourceName": "arthur_units"
                },
                "resourceName": "arthur_units",
                "id": "arthurUnit",
                "label": "arthurUnit"
            },
            "view360": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "view360",
                "label": "view360"
            },
            "councilShow": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "councilShow",
                "label": "councilShow"
            },
            "currentPlace": {
                "targetClass": "App\\Model\\Enum\\Places\\UnitPlaces",
                "optionsName": "VALUES",
                "type": "enum_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": "enquired",
                        "label": "Enquired"
                    },
                    {
                        "id": "available_to_let",
                        "label": "Available to let"
                    },
                    {
                        "id": "discarded",
                        "label": "Discarded"
                    },
                    {
                        "id": "let",
                        "label": "Let"
                    },
                    {
                        "id": "unavailable_to_let",
                        "label": "Unavailable"
                    },
                    {
                        "id": "under_offer",
                        "label": "Under Offer"
                    },
                    {
                        "id": "managed",
                        "label": "Managed"
                    },
                    {
                        "id": "not_managed",
                        "label": "Unmanaged"
                    },
                    {
                        "id": "vacant",
                        "label": "Vacant"
                    },
                    {
                        "id": "occupied",
                        "label": "Occupied"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "currentPlace",
                "label": "currentPlace"
            },
            "hasDiscount": {
                "type": "boolean",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "hasDiscount",
                "label": "hasDiscount"
            },
            "notes": {
                "type": "string",
                "nullable": true,
                "write": true,
                "read": true,
                "id": "notes",
                "label": "notes"
            },
            "portals": {
                "targetClass": "App\\Entity\\Marketing\\PortalUnit",
                "type": "embedded_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "resource": {
                    "model": {
                        "id": {
                            "type": "id",
                            "nullable": false,
                            "write": false,
                            "read": false,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "id",
                            "label": "id"
                        },
                        "portal": {
                            "targetClass": "App\\Entity\\Marketing\\Portal",
                            "type": "reference",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "resource": {
                                "model": {
                                    "id": {
                                        "type": "id",
                                        "nullable": false,
                                        "write": false,
                                        "read": false,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "id",
                                        "label": "id"
                                    },
                                    "name": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "name",
                                        "label": "name"
                                    },
                                    "discount": {
                                        "type": "integer",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "discount",
                                        "label": "discount"
                                    },
                                    "url": {
                                        "type": "string",
                                        "nullable": false,
                                        "write": false,
                                        "read": true,
                                        "validators": [
                                            "required"
                                        ],
                                        "errorMessages": [
                                            "This field is required"
                                        ],
                                        "id": "url",
                                        "label": "url"
                                    }
                                },
                                "title": "Portal",
                                "resourceName": "portals"
                            },
                            "resourceName": "portals",
                            "optionText": "name",
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "portal",
                            "label": "portal"
                        },
                        "unitDiscount": {
                            "type": "integer",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "unitDiscount",
                            "label": "unitDiscount"
                        },
                        "isActive": {
                            "type": "boolean",
                            "nullable": false,
                            "write": true,
                            "read": true,
                            "validators": [
                                "required"
                            ],
                            "errorMessages": [
                                "This field is required"
                            ],
                            "id": "isActive",
                            "label": "isActive"
                        }
                    },
                    "title": "Portal Unit",
                    "resourceName": "portal_units"
                },
                "resourceName": "portal_units",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "portals",
                "label": "portals"
            },
            "requestedTransition": {
                "id": "requestedTransition",
                "label": "requestedTransition"
            },
            "eligibleTransitions": {
                "id": "eligibleTransitions",
                "label": "eligibleTransitions"
            }
        },
        "title": "Units",
        "resourceName": "units"
    },
    "unit_features": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            }
        },
        "title": "Unit features",
        "resourceName": "unit_features"
    },
    "unit_feature_lists": {
        "model": [],
        "title": "Unit Features Lists",
        "resourceName": "unit_feature_lists"
    },
    "unit_types": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "description": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "description",
                "label": "description"
            }
        },
        "title": "Unit Types",
        "resourceName": "unit_types"
    },
    "users": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "email": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "email",
                "label": "email"
            },
            "password": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "password",
                "label": "password"
            },
            "name": {
                "type": "string",
                "nullable": false,
                "write": true,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "name",
                "label": "name"
            },
            "roles": {
                "targetClass": "App\\Model\\UserRoles",
                "optionsName": "VALUES",
                "type": "enum_multiple",
                "nullable": false,
                "write": true,
                "read": true,
                "options": [
                    {
                        "id": "ROLE_ADMIN",
                        "label": "Administrator"
                    },
                    {
                        "id": "ROLE_API",
                        "label": "User for API"
                    },
                    {
                        "id": "ROLE_USER",
                        "label": "Standard User"
                    },
                    {
                        "id": "ROLE_GENERAL_MANAGER",
                        "label": "General Manager"
                    },
                    {
                        "id": "ROLE_FINANCE",
                        "label": "Finance"
                    },
                    {
                        "id": "ROLE_FINANCE_DIRECTOR",
                        "label": "Finance Director"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "roles",
                "label": "roles"
            },
            "lastNotificationCheckTime": {
                "id": "lastNotificationCheckTime",
                "label": "lastNotificationCheckTime"
            }
        },
        "title": "Users",
        "resourceName": "users"
    },
    "arthur_properties": {
        "model": [],
        "title": "Arthur properties",
        "resourceName": "arthur_properties"
    },
    "arthur_units": {
        "model": [],
        "title": "Arthur Unit",
        "resourceName": "arthur_units"
    },
    "invoices": {
        "model": {
            "id": {
                "type": "id",
                "nullable": false,
                "write": false,
                "read": false,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "id",
                "label": "id"
            },
            "payment": {
                "targetClass": "App\\Entity\\Payments\\Payment",
                "type": "reference",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Payments",
                    "resourceName": "payments"
                },
                "resourceName": "payments",
                "optionText": "id",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "payment",
                "label": "payment"
            },
            "reference": {
                "type": "string",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "reference",
                "label": "reference"
            },
            "dueTime": {
                "type": "date",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "dueTime",
                "label": "dueTime"
            },
            "status": {
                "targetClass": "App\\Xero\\Model\\InvoiceStatus",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "DRAFT"
                    },
                    {
                        "id": 1,
                        "label": "SUBMITTED"
                    },
                    {
                        "id": 2,
                        "label": "AUTHORISED"
                    },
                    {
                        "id": 3,
                        "label": "PAID"
                    },
                    {
                        "id": 4,
                        "label": "VOIDED"
                    },
                    {
                        "id": 5,
                        "label": "DELETED"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "status",
                "label": "status"
            },
            "type": {
                "targetClass": "App\\Xero\\Model\\InvoiceType",
                "optionsName": "VALUES",
                "type": "enum",
                "nullable": false,
                "write": false,
                "read": true,
                "options": [
                    {
                        "id": 0,
                        "label": "ACCREC"
                    },
                    {
                        "id": 1,
                        "label": "ACCPAY"
                    }
                ],
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "type",
                "label": "type"
            },
            "lineAmountType": {
                "type": "string",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "lineAmountType",
                "label": "lineAmountType"
            },
            "contactId": {
                "type": "string",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "contactId",
                "label": "contactId"
            },
            "lineItems": {
                "targetClass": "App\\Xero\\Entity\\LineItem",
                "type": "embedded_multiple",
                "nullable": false,
                "write": false,
                "read": true,
                "resource": {
                    "model": [],
                    "title": "Xero line items",
                    "resourceName": "line_items"
                },
                "resourceName": "line_items",
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "lineItems",
                "label": "lineItems"
            },
            "xeroInvoiceId": {
                "type": "string",
                "nullable": false,
                "write": false,
                "read": true,
                "validators": [
                    "required"
                ],
                "errorMessages": [
                    "This field is required"
                ],
                "id": "xeroInvoiceId",
                "label": "xeroInvoiceId"
            }
        },
        "title": "Invoice",
        "resourceName": "invoices"
    },
    "line_items": {
        "model": [],
        "title": "Xero line items",
        "resourceName": "line_items"
    }
};
