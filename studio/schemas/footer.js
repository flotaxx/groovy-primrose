export default {
    "type": "document",
    "name": "footer",
    "title": "Footer Configuration",
    "fields": [
        {
            "type": "markdown",
            "name": "content",
            "title": "Footer Content",
            "validation": null
        },
        {
            "type": "array",
            "name": "links",
            "title": "Links",
            "description": "A list of links to display in the footer of the site",
            "validation": null,
            "of": [
                {
                    "type": "object",
                    "fields": [
                        {
                            "type": "string",
                            "name": "text",
                            "title": "Link text",
                            "validation": null
                        },
                        {
                            "type": "string",
                            "name": "url",
                            "title": "URL",
                            "validation": null
                        },
                        {
                            "type": "boolean",
                            "name": "new_window",
                            "title": "Open in new window",
                            "initialValue": true,
                            "validation": null
                        }
                    ],
                    "preview": {
                        "select": {
                            "title": "text"
                        }
                    }
                }
            ]
        },
        {
            "type": "string",
            "name": "stackbit_file_path",
            "title": "Footer Configuration File Path",
            "description": "The file path of the file that stores this data",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "src/data/footer.yml"
                ]
            }
        },
        {
            "type": "string",
            "name": "stackbit_model_type",
            "title": "Stackbit Model Type",
            "description": "Stackbit model type",
            "hidden": false,
            "validation": Rule => Rule.required(),
            "options": {
                "list": [
                    "data"
                ]
            }
        }
    ],
    "singleInstance": true
}