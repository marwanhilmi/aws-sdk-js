/**
 * Copyright 2012-2013 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"). You
 * may not use this file except in compliance with the License. A copy of
 * the License is located at
 *
 *     http://aws.amazon.com/apache2.0/
 *
 * or in the "license" file accompanying this file. This file is
 * distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF
 * ANY KIND, either express or implied. See the License for the specific
 * language governing permissions and limitations under the License.
 */


AWS = {};

/**
 * Constructs a service interface and a low-level {Client}.  Use the +client+
 * property to make API calls.  Each API operation is exposed as a function on
 * the +client+.
 *
 * === Sending a Request Using CloudSearch
 *
 *   svc = new AWS.CloudSearch();
 *   svc.client.OPERATION_NAME(params, function (err, data) {
 *     if (err) {
 *       console.log(err); // an error occurred
 *     } else {
 *       console.log(data); // successful response
 *     }
 *   });
 *
 * @!method constructor(options)
 *   Constructs a service interface.  The returned service will have a {client}
 *   property that provides access to the API operations.
 *   @option (see AWS.CloudSearch.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.CloudSearch.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.CloudSearch.Client
 *
 */
AWS.CloudSearch = inherit({})

/**
 * The low-level CloudSearch client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method createDomain(params, callback)
 *   Calls the CreateDomain API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DomainStatus+ - (<tt>Object</tt>)
 *         * +DomainId+ - (<tt>String</tt>)
 *         * +DomainName+ - (<tt>String</tt>)
 *         * +Created+ - (<tt>Boolean</tt>) True if the search domain is
 *           created. It can take several minutes to initialize a domain
 *           when CreateDomain is called. Newly created search domains are
 *           returned from DescribeDomains with a false value for Created
 *           until domain creation is complete.
 *         * +Deleted+ - (<tt>Boolean</tt>) True if the search domain has
 *           been deleted. The system must clean up resources dedicated to
 *           the search domain when DeleteDomain is called. Newly deleted
 *           search domains are returned from DescribeDomains with a true
 *           value for IsDeleted for several minutes until resource cleanup
 *           is complete.
 *         * +NumSearchableDocs+ - (<tt>Integer</tt>) The number of
 *           documents that have been submitted to the domain and indexed.
 *         * +DocService+ - (<tt>Object</tt>) The service endpoint for
 *           updating documents in a search domain.
 *           * +Arn+ - (<tt>String</tt>)
 *           * +Endpoint+ - (<tt>String</tt>)
 *         * +SearchService+ - (<tt>Object</tt>) The service endpoint for
 *           requesting search results from a search domain.
 *           * +Arn+ - (<tt>String</tt>)
 *           * +Endpoint+ - (<tt>String</tt>)
 *         * +RequiresIndexDocuments+ - (<tt>Boolean</tt>) True
 *           if IndexDocuments needs to be called to activate the current
 *           domain configuration.
 *         * +Processing+ - (<tt>Boolean</tt>) True if processing is being
 *           done to activate the current domain configuration.
 *         * +SearchInstanceType+ - (<tt>String</tt>) The instance type
 *           (such as search.m1.small) that is being used to process search
 *           requests.
 *         * +SearchPartitionCount+ - (<tt>Integer</tt>) The number of
 *           partitions across which the search index is spread.
 *         * +SearchInstanceCount+ - (<tt>Integer</tt>) The number of
 *           search instances that are available to process search
 *           requests.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method defineIndexField(params, callback)
 *   Calls the DefineIndexField API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +IndexField+ - (*required*, <tt>Object</tt>)
 *       * +IndexFieldName+ - (*required*, <tt>String</tt>) The name of a
 *         field in the search index. Field names must begin with a
 *         letter and can contain the following characters: a-z
 *         (lowercase), 0-9, and _ (underscore). Uppercase letters and
 *         hyphens are not allowed. The names "body", "docid", and
 *         "text_relevance" are reserved and cannot be specified as field
 *         or rank expression names.
 *       * +IndexFieldType+ - (*required*, <tt>String</tt>) The type of
 *         field. Based on this type, exactly one of the UIntOptions,
 *         LiteralOptions or TextOptions must be present.
 *       * +UIntOptions+ - (<tt>Object</tt>) Options for an unsigned
 *         integer field. Present if IndexFieldType specifies the field
 *         is of type unsigned integer.
 *         * +DefaultValue+ - (<tt>Integer</tt>) The default value for an
 *           unsigned integer field. Optional.
 *       * +LiteralOptions+ - (<tt>Object</tt>) Options for literal
 *         field. Present if IndexFieldType specifies the field is of
 *         type literal.
 *         * +DefaultValue+ - (<tt>String</tt>) The default value for a
 *           literal field. Optional.
 *         * +SearchEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *           search is enabled for this field. Default: False.
 *         * +FacetEnabled+ - (<tt>Boolean</tt>) Specifies whether facets
 *           are enabled for this field. Default: False.
 *         * +ResultEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *           values of this field can be returned in search results and
 *           used for ranking. Default: False.
 *       * +TextOptions+ - (<tt>Object</tt>) Options for text field.
 *         Present if IndexFieldType specifies the field is of type text.
 *         * +DefaultValue+ - (<tt>String</tt>) The default value for a
 *           text field. Optional.
 *         * +FacetEnabled+ - (<tt>Boolean</tt>) Specifies whether facets
 *           are enabled for this field. Default: False.
 *         * +ResultEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *           values of this field can be returned in search results and
 *           used for ranking. Default: False.
 *         * +TextProcessor+ - (<tt>String</tt>) The text processor to
 *           apply to this field. Optional. Possible values:
 *           cs_text_no_stemming: turns off stemming for the field.
 *           Default: none
 *       * +SourceAttributes+ - (<tt>Array<Object></tt>) An optional list
 *         of source attributes that provide data for this index field.
 *         If not specified, the data is pulled from a source attribute
 *         with the same name as this IndexField. When one or more source
 *         attributes are specified, an optional data transformation can
 *         be applied to the source data when populating the index field.
 *         You can configure a maximum of 20 sources for an IndexField.
 *         * +SourceDataFunction+ - (*required*, <tt>String</tt>)
 *           Identifies the transformation to apply when copying data
 *           from a source attribute.
 *         * +SourceDataCopy+ - (<tt>Object</tt>) Copies data from a
 *           source document attribute to an IndexField.
 *           * +SourceName+ - (*required*, <tt>String</tt>) The name of
 *             the document source field to add to this IndexField.
 *           * +DefaultValue+ - (<tt>String</tt>) The default value to
 *             use if the source attribute is not specified in a
 *             document. Optional.
 *         * +SourceDataTrimTitle+ - (<tt>Object</tt>) Trims common title
 *           words from a source document attribute when populating an
 *           IndexField. This can be used to create an IndexField you can
 *           use for sorting.
 *           * +SourceName+ - (*required*, <tt>String</tt>) The name of
 *             the document source field to add to this IndexField.
 *           * +DefaultValue+ - (<tt>String</tt>) The default value to
 *             use if the source attribute is not specified in a
 *             document. Optional.
 *           * +Separator+ - (<tt>String</tt>) The separator that follows
 *             the text to trim.
 *           * +Language+ - (<tt>String</tt>)
 *         * +SourceDataMap+ - (<tt>Object</tt>) Maps source document
 *           attribute values to new values when populating the
 *           IndexField.
 *           * +SourceName+ - (*required*, <tt>String</tt>) The name of
 *             the document source field to add to this IndexField.
 *           * +DefaultValue+ - (<tt>String</tt>) The default value to
 *             use if the source attribute is not specified in a
 *             document. Optional.
 *           * +Cases+ - (<tt>Object<String></tt>) A map that translates
 *             source field values to custom values.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +IndexField+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>Object</tt>)
 *           * +IndexFieldName+ - (<tt>String</tt>) The name of
 *             a field in the search index. Field names must begin with a
 *             letter and can contain the following characters: a-z
 *             (lowercase), 0-9, and _ (underscore). Uppercase letters and
 *             hyphens are not allowed. The names "body", "docid", and
 *             "text_relevance" are reserved and cannot be specified as
 *             field or rank expression names.
 *           * +IndexFieldType+ - (<tt>String</tt>) The type of
 *             field. Based on this type, exactly one of the UIntOptions,
 *             LiteralOptions or TextOptions must be present.
 *           * +UIntOptions+ - (<tt>Object</tt>) Options for an unsigned
 *             integer field. Present if IndexFieldType specifies the field
 *             is of type unsigned integer.
 *             * +DefaultValue+ - (<tt>Integer</tt>) The default value for
 *               an unsigned integer field. Optional.
 *           * +LiteralOptions+ - (<tt>Object</tt>) Options for literal
 *             field. Present if IndexFieldType specifies the field is of
 *             type literal.
 *             * +DefaultValue+ - (<tt>String</tt>) The default value for a
 *               literal field. Optional.
 *             * +SearchEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               search is enabled for this field. Default: False.
 *             * +FacetEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               facets are enabled for this field. Default: False.
 *             * +ResultEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               values of this field can be returned in search results and
 *               used for ranking. Default: False.
 *           * +TextOptions+ - (<tt>Object</tt>) Options for text field.
 *             Present if IndexFieldType specifies the field is of type
 *             text.
 *             * +DefaultValue+ - (<tt>String</tt>) The default value for a
 *               text field. Optional.
 *             * +FacetEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               facets are enabled for this field. Default: False.
 *             * +ResultEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               values of this field can be returned in search results and
 *               used for ranking. Default: False.
 *             * +TextProcessor+ - (<tt>String</tt>) The text processor to
 *               apply to this field. Optional. Possible values:
 *               cs_text_no_stemming: turns off stemming for the field.
 *               Default: none
 *           * +SourceAttributes+ - (<tt>Array<Object></tt>) An optional
 *             list of source attributes that provide data for this index
 *             field. If not specified, the data is pulled from a source
 *             attribute with the same name as this IndexField. When one or
 *             more source attributes are specified, an optional data
 *             transformation can be applied to the source data when
 *             populating the index field. You can configure a maximum of
 *             20 sources for an IndexField.
 *             * +SourceDataFunction+ - (<tt>String</tt>)
 *               Identifies the transformation to apply when copying data
 *               from a source attribute.
 *             * +SourceDataCopy+ - (<tt>Object</tt>) Copies data from a
 *               source document attribute to an IndexField.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *             * +SourceDataTrimTitle+ - (<tt>Object</tt>) Trims common
 *               title words from a source document attribute when
 *               populating an IndexField. This can be used to create an
 *               IndexField you can use for sorting.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *               * +Separator+ - (<tt>String</tt>) The separator that
 *                 follows the text to trim.
 *               * +Language+ - (<tt>String</tt>)
 *             * +SourceDataMap+ - (<tt>Object</tt>) Maps source document
 *               attribute values to new values when populating the
 *               IndexField.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *               * +Cases+ - (<tt>Object<String></tt>) A map that
 *                 translates source field values to custom values.
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method defineRankExpression(params, callback)
 *   Calls the DefineRankExpression API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +RankExpression+ - (*required*, <tt>Object</tt>)
 *       * +RankName+ - (*required*, <tt>String</tt>) The name of a rank
 *         expression. Rank expression names must begin with a letter and
 *         can contain the following characters: a-z (lowercase), 0-9,
 *         and _ (underscore). Uppercase letters and hyphens are not
 *         allowed. The names "body", "docid", and "text_relevance" are
 *         reserved and cannot be specified as field or rank expression
 *         names.
 *       * +RankExpression+ - (*required*, <tt>String</tt>) The
 *         expression to evaluate for ranking or thresholding while
 *         processing a search request. The RankExpression syntax is
 *         based on JavaScript expressions and supports: Integer,
 *         floating point, hex and octal literals Shortcut evaluation of
 *         logical operators such that an expression a || b evaluates to
 *         the value a if a is true without evaluting b at all JavaScript
 *         order of precendence for operators Arithmetic operators: + - *
 *         / % Boolean operators (including the ternary operator) Bitwise
 *         operators Comparison operators Common mathematic functions:
 *         abs ceil erf exp floor lgamma ln log2 log10 max min sqrt pow
 *         Trigonometric library functions: acosh acos asinh asin atanh
 *         atan cosh cos sinh sin tanh tan Random generation of a number
 *         between 0 and 1: rand Current time in epoch: time The min max
 *         functions that operate on a variable argument list
 *         Intermediate results are calculated as double precision
 *         floating point values. The final return value of a
 *         RankExpression is automatically converted from floating point
 *         to a 32-bit unsigned integer by rounding to the nearest
 *         integer, with a natural floor of 0 and a ceiling of
 *         max(uint32_t), 4294967295. Mathematical errors such as
 *         dividing by 0 will fail during evaluation and return a value
 *         of 0. The source data for a RankExpression can be the name of
 *         an IndexField of type uint, another RankExpression or the
 *         reserved name text_relevance. The text_relevance source is
 *         defined to return an integer from 0 to 1000 (inclusive) to
 *         indicate how relevant a document is to the search request,
 *         taking into account repetition of search terms in the document
 *         and proximity of search terms to each other in each matching
 *         IndexField in the document. For more information about using
 *         rank expressions to customize ranking, see the Amazon
 *         CloudSearch Developer Guide.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RankExpression+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>Object</tt>) The expression that
 *           is evaluated for ranking or thresholding while processing a
 *           search request.
 *           * +RankName+ - (<tt>String</tt>) The name of a
 *             rank expression. Rank expression names must begin with a
 *             letter and can contain the following characters: a-z
 *             (lowercase), 0-9, and _ (underscore). Uppercase letters and
 *             hyphens are not allowed. The names "body", "docid", and
 *             "text_relevance" are reserved and cannot be specified as
 *             field or rank expression names.
 *           * +RankExpression+ - (<tt>String</tt>) The
 *             expression to evaluate for ranking or thresholding while
 *             processing a search request. The RankExpression syntax is
 *             based on JavaScript expressions and supports: Integer,
 *             floating point, hex and octal literals Shortcut evaluation
 *             of logical operators such that an expression a || b
 *             evaluates to the value a if a is true without evaluting b at
 *             all JavaScript order of precendence for operators Arithmetic
 *             operators: + - * / % Boolean operators (including the
 *             ternary operator) Bitwise operators Comparison operators
 *             Common mathematic functions: abs ceil erf exp floor lgamma
 *             ln log2 log10 max min sqrt pow Trigonometric library
 *             functions: acosh acos asinh asin atanh atan cosh cos sinh
 *             sin tanh tan Random generation of a number between 0 and 1:
 *             rand Current time in epoch: time The min max functions that
 *             operate on a variable argument list Intermediate results are
 *             calculated as double precision floating point values. The
 *             final return value of a RankExpression is automatically
 *             converted from floating point to a 32-bit unsigned integer
 *             by rounding to the nearest integer, with a natural floor of
 *             0 and a ceiling of max(uint32_t), 4294967295. Mathematical
 *             errors such as dividing by 0 will fail during evaluation and
 *             return a value of 0. The source data for a RankExpression
 *             can be the name of an IndexField of type uint, another
 *             RankExpression or the reserved name text_relevance. The
 *             text_relevance source is defined to return an integer from 0
 *             to 1000 (inclusive) to indicate how relevant a document is
 *             to the search request, taking into account repetition of
 *             search terms in the document and proximity of search terms
 *             to each other in each matching IndexField in the document.
 *             For more information about using rank expressions to
 *             customize ranking, see the Amazon CloudSearch Developer
 *             Guide.
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteDomain(params, callback)
 *   Calls the DeleteDomain API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DomainStatus+ - (<tt>Object</tt>)
 *         * +DomainId+ - (<tt>String</tt>)
 *         * +DomainName+ - (<tt>String</tt>)
 *         * +Created+ - (<tt>Boolean</tt>) True if the search domain is
 *           created. It can take several minutes to initialize a domain
 *           when CreateDomain is called. Newly created search domains are
 *           returned from DescribeDomains with a false value for Created
 *           until domain creation is complete.
 *         * +Deleted+ - (<tt>Boolean</tt>) True if the search domain has
 *           been deleted. The system must clean up resources dedicated to
 *           the search domain when DeleteDomain is called. Newly deleted
 *           search domains are returned from DescribeDomains with a true
 *           value for IsDeleted for several minutes until resource cleanup
 *           is complete.
 *         * +NumSearchableDocs+ - (<tt>Integer</tt>) The number of
 *           documents that have been submitted to the domain and indexed.
 *         * +DocService+ - (<tt>Object</tt>) The service endpoint for
 *           updating documents in a search domain.
 *           * +Arn+ - (<tt>String</tt>)
 *           * +Endpoint+ - (<tt>String</tt>)
 *         * +SearchService+ - (<tt>Object</tt>) The service endpoint for
 *           requesting search results from a search domain.
 *           * +Arn+ - (<tt>String</tt>)
 *           * +Endpoint+ - (<tt>String</tt>)
 *         * +RequiresIndexDocuments+ - (<tt>Boolean</tt>) True
 *           if IndexDocuments needs to be called to activate the current
 *           domain configuration.
 *         * +Processing+ - (<tt>Boolean</tt>) True if processing is being
 *           done to activate the current domain configuration.
 *         * +SearchInstanceType+ - (<tt>String</tt>) The instance type
 *           (such as search.m1.small) that is being used to process search
 *           requests.
 *         * +SearchPartitionCount+ - (<tt>Integer</tt>) The number of
 *           partitions across which the search index is spread.
 *         * +SearchInstanceCount+ - (<tt>Integer</tt>) The number of
 *           search instances that are available to process search
 *           requests.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteIndexField(params, callback)
 *   Calls the DeleteIndexField API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +IndexFieldName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +IndexField+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>Object</tt>)
 *           * +IndexFieldName+ - (<tt>String</tt>) The name of
 *             a field in the search index. Field names must begin with a
 *             letter and can contain the following characters: a-z
 *             (lowercase), 0-9, and _ (underscore). Uppercase letters and
 *             hyphens are not allowed. The names "body", "docid", and
 *             "text_relevance" are reserved and cannot be specified as
 *             field or rank expression names.
 *           * +IndexFieldType+ - (<tt>String</tt>) The type of
 *             field. Based on this type, exactly one of the UIntOptions,
 *             LiteralOptions or TextOptions must be present.
 *           * +UIntOptions+ - (<tt>Object</tt>) Options for an unsigned
 *             integer field. Present if IndexFieldType specifies the field
 *             is of type unsigned integer.
 *             * +DefaultValue+ - (<tt>Integer</tt>) The default value for
 *               an unsigned integer field. Optional.
 *           * +LiteralOptions+ - (<tt>Object</tt>) Options for literal
 *             field. Present if IndexFieldType specifies the field is of
 *             type literal.
 *             * +DefaultValue+ - (<tt>String</tt>) The default value for a
 *               literal field. Optional.
 *             * +SearchEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               search is enabled for this field. Default: False.
 *             * +FacetEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               facets are enabled for this field. Default: False.
 *             * +ResultEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               values of this field can be returned in search results and
 *               used for ranking. Default: False.
 *           * +TextOptions+ - (<tt>Object</tt>) Options for text field.
 *             Present if IndexFieldType specifies the field is of type
 *             text.
 *             * +DefaultValue+ - (<tt>String</tt>) The default value for a
 *               text field. Optional.
 *             * +FacetEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               facets are enabled for this field. Default: False.
 *             * +ResultEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               values of this field can be returned in search results and
 *               used for ranking. Default: False.
 *             * +TextProcessor+ - (<tt>String</tt>) The text processor to
 *               apply to this field. Optional. Possible values:
 *               cs_text_no_stemming: turns off stemming for the field.
 *               Default: none
 *           * +SourceAttributes+ - (<tt>Array<Object></tt>) An optional
 *             list of source attributes that provide data for this index
 *             field. If not specified, the data is pulled from a source
 *             attribute with the same name as this IndexField. When one or
 *             more source attributes are specified, an optional data
 *             transformation can be applied to the source data when
 *             populating the index field. You can configure a maximum of
 *             20 sources for an IndexField.
 *             * +SourceDataFunction+ - (<tt>String</tt>)
 *               Identifies the transformation to apply when copying data
 *               from a source attribute.
 *             * +SourceDataCopy+ - (<tt>Object</tt>) Copies data from a
 *               source document attribute to an IndexField.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *             * +SourceDataTrimTitle+ - (<tt>Object</tt>) Trims common
 *               title words from a source document attribute when
 *               populating an IndexField. This can be used to create an
 *               IndexField you can use for sorting.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *               * +Separator+ - (<tt>String</tt>) The separator that
 *                 follows the text to trim.
 *               * +Language+ - (<tt>String</tt>)
 *             * +SourceDataMap+ - (<tt>Object</tt>) Maps source document
 *               attribute values to new values when populating the
 *               IndexField.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *               * +Cases+ - (<tt>Object<String></tt>) A map that
 *                 translates source field values to custom values.
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteRankExpression(params, callback)
 *   Calls the DeleteRankExpression API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +RankName+ - (*required*, <tt>String</tt>) The name of the
 *       RankExpression to delete.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RankExpression+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>Object</tt>) The expression that
 *           is evaluated for ranking or thresholding while processing a
 *           search request.
 *           * +RankName+ - (<tt>String</tt>) The name of a
 *             rank expression. Rank expression names must begin with a
 *             letter and can contain the following characters: a-z
 *             (lowercase), 0-9, and _ (underscore). Uppercase letters and
 *             hyphens are not allowed. The names "body", "docid", and
 *             "text_relevance" are reserved and cannot be specified as
 *             field or rank expression names.
 *           * +RankExpression+ - (<tt>String</tt>) The
 *             expression to evaluate for ranking or thresholding while
 *             processing a search request. The RankExpression syntax is
 *             based on JavaScript expressions and supports: Integer,
 *             floating point, hex and octal literals Shortcut evaluation
 *             of logical operators such that an expression a || b
 *             evaluates to the value a if a is true without evaluting b at
 *             all JavaScript order of precendence for operators Arithmetic
 *             operators: + - * / % Boolean operators (including the
 *             ternary operator) Bitwise operators Comparison operators
 *             Common mathematic functions: abs ceil erf exp floor lgamma
 *             ln log2 log10 max min sqrt pow Trigonometric library
 *             functions: acosh acos asinh asin atanh atan cosh cos sinh
 *             sin tanh tan Random generation of a number between 0 and 1:
 *             rand Current time in epoch: time The min max functions that
 *             operate on a variable argument list Intermediate results are
 *             calculated as double precision floating point values. The
 *             final return value of a RankExpression is automatically
 *             converted from floating point to a 32-bit unsigned integer
 *             by rounding to the nearest integer, with a natural floor of
 *             0 and a ceiling of max(uint32_t), 4294967295. Mathematical
 *             errors such as dividing by 0 will fail during evaluation and
 *             return a value of 0. The source data for a RankExpression
 *             can be the name of an IndexField of type uint, another
 *             RankExpression or the reserved name text_relevance. The
 *             text_relevance source is defined to return an integer from 0
 *             to 1000 (inclusive) to indicate how relevant a document is
 *             to the search request, taking into account repetition of
 *             search terms in the document and proximity of search terms
 *             to each other in each matching IndexField in the document.
 *             For more information about using rank expressions to
 *             customize ranking, see the Amazon CloudSearch Developer
 *             Guide.
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDefaultSearchField(params, callback)
 *   Calls the DescribeDefaultSearchField API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DefaultSearchField+ - (<tt>Object</tt>) The name of
 *         the IndexField to use for search requests issued with the q
 *         parameter. The default is the empty string, which automatically
 *         searches all text fields.
 *         * +Options+ - (<tt>String</tt>) The name of the
 *           IndexField to use as the default search field. The default is
 *           an empty string, which automatically searches all text fields.
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeDomains(params, callback)
 *   Calls the DescribeDomains API operation.
 *   @param params [Object]
 *     * +DomainNames+ - (<tt>Array<String></tt>) Limits the
 *       DescribeDomains response to the specified search domains.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DomainStatusList+ - (<tt>Array<Object></tt>)
 *         * +DomainId+ - (<tt>String</tt>)
 *         * +DomainName+ - (<tt>String</tt>)
 *         * +Created+ - (<tt>Boolean</tt>) True if the search domain is
 *           created. It can take several minutes to initialize a domain
 *           when CreateDomain is called. Newly created search domains are
 *           returned from DescribeDomains with a false value for Created
 *           until domain creation is complete.
 *         * +Deleted+ - (<tt>Boolean</tt>) True if the search domain has
 *           been deleted. The system must clean up resources dedicated to
 *           the search domain when DeleteDomain is called. Newly deleted
 *           search domains are returned from DescribeDomains with a true
 *           value for IsDeleted for several minutes until resource cleanup
 *           is complete.
 *         * +NumSearchableDocs+ - (<tt>Integer</tt>) The number of
 *           documents that have been submitted to the domain and indexed.
 *         * +DocService+ - (<tt>Object</tt>) The service endpoint for
 *           updating documents in a search domain.
 *           * +Arn+ - (<tt>String</tt>)
 *           * +Endpoint+ - (<tt>String</tt>)
 *         * +SearchService+ - (<tt>Object</tt>) The service endpoint for
 *           requesting search results from a search domain.
 *           * +Arn+ - (<tt>String</tt>)
 *           * +Endpoint+ - (<tt>String</tt>)
 *         * +RequiresIndexDocuments+ - (<tt>Boolean</tt>) True
 *           if IndexDocuments needs to be called to activate the current
 *           domain configuration.
 *         * +Processing+ - (<tt>Boolean</tt>) True if processing is being
 *           done to activate the current domain configuration.
 *         * +SearchInstanceType+ - (<tt>String</tt>) The instance type
 *           (such as search.m1.small) that is being used to process search
 *           requests.
 *         * +SearchPartitionCount+ - (<tt>Integer</tt>) The number of
 *           partitions across which the search index is spread.
 *         * +SearchInstanceCount+ - (<tt>Integer</tt>) The number of
 *           search instances that are available to process search
 *           requests.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeIndexFields(params, callback)
 *   Calls the DescribeIndexFields API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +FieldNames+ - (<tt>Array<String></tt>) Limits the
 *       DescribeIndexFields response to the specified fields.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +IndexFields+ - (<tt>Array<Object></tt>) The index
 *         fields configured for the domain.
 *         * +Options+ - (<tt>Object</tt>)
 *           * +IndexFieldName+ - (<tt>String</tt>) The name of
 *             a field in the search index. Field names must begin with a
 *             letter and can contain the following characters: a-z
 *             (lowercase), 0-9, and _ (underscore). Uppercase letters and
 *             hyphens are not allowed. The names "body", "docid", and
 *             "text_relevance" are reserved and cannot be specified as
 *             field or rank expression names.
 *           * +IndexFieldType+ - (<tt>String</tt>) The type of
 *             field. Based on this type, exactly one of the UIntOptions,
 *             LiteralOptions or TextOptions must be present.
 *           * +UIntOptions+ - (<tt>Object</tt>) Options for an unsigned
 *             integer field. Present if IndexFieldType specifies the field
 *             is of type unsigned integer.
 *             * +DefaultValue+ - (<tt>Integer</tt>) The default value for
 *               an unsigned integer field. Optional.
 *           * +LiteralOptions+ - (<tt>Object</tt>) Options for literal
 *             field. Present if IndexFieldType specifies the field is of
 *             type literal.
 *             * +DefaultValue+ - (<tt>String</tt>) The default value for a
 *               literal field. Optional.
 *             * +SearchEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               search is enabled for this field. Default: False.
 *             * +FacetEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               facets are enabled for this field. Default: False.
 *             * +ResultEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               values of this field can be returned in search results and
 *               used for ranking. Default: False.
 *           * +TextOptions+ - (<tt>Object</tt>) Options for text field.
 *             Present if IndexFieldType specifies the field is of type
 *             text.
 *             * +DefaultValue+ - (<tt>String</tt>) The default value for a
 *               text field. Optional.
 *             * +FacetEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               facets are enabled for this field. Default: False.
 *             * +ResultEnabled+ - (<tt>Boolean</tt>) Specifies whether
 *               values of this field can be returned in search results and
 *               used for ranking. Default: False.
 *             * +TextProcessor+ - (<tt>String</tt>) The text processor to
 *               apply to this field. Optional. Possible values:
 *               cs_text_no_stemming: turns off stemming for the field.
 *               Default: none
 *           * +SourceAttributes+ - (<tt>Array<Object></tt>) An optional
 *             list of source attributes that provide data for this index
 *             field. If not specified, the data is pulled from a source
 *             attribute with the same name as this IndexField. When one or
 *             more source attributes are specified, an optional data
 *             transformation can be applied to the source data when
 *             populating the index field. You can configure a maximum of
 *             20 sources for an IndexField.
 *             * +SourceDataFunction+ - (<tt>String</tt>)
 *               Identifies the transformation to apply when copying data
 *               from a source attribute.
 *             * +SourceDataCopy+ - (<tt>Object</tt>) Copies data from a
 *               source document attribute to an IndexField.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *             * +SourceDataTrimTitle+ - (<tt>Object</tt>) Trims common
 *               title words from a source document attribute when
 *               populating an IndexField. This can be used to create an
 *               IndexField you can use for sorting.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *               * +Separator+ - (<tt>String</tt>) The separator that
 *                 follows the text to trim.
 *               * +Language+ - (<tt>String</tt>)
 *             * +SourceDataMap+ - (<tt>Object</tt>) Maps source document
 *               attribute values to new values when populating the
 *               IndexField.
 *               * +SourceName+ - (<tt>String</tt>) The name of
 *                 the document source field to add to this IndexField.
 *               * +DefaultValue+ - (<tt>String</tt>) The default value to
 *                 use if the source attribute is not specified in a
 *                 document. Optional.
 *               * +Cases+ - (<tt>Object<String></tt>) A map that
 *                 translates source field values to custom values.
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeRankExpressions(params, callback)
 *   Calls the DescribeRankExpressions API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +RankNames+ - (<tt>Array<String></tt>) Limits the
 *       DescribeRankExpressions response to the specified fields.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +RankExpressions+ - (<tt>Array<Object></tt>) The
 *         rank expressions configured for the domain.
 *         * +Options+ - (<tt>Object</tt>) The expression that
 *           is evaluated for ranking or thresholding while processing a
 *           search request.
 *           * +RankName+ - (<tt>String</tt>) The name of a
 *             rank expression. Rank expression names must begin with a
 *             letter and can contain the following characters: a-z
 *             (lowercase), 0-9, and _ (underscore). Uppercase letters and
 *             hyphens are not allowed. The names "body", "docid", and
 *             "text_relevance" are reserved and cannot be specified as
 *             field or rank expression names.
 *           * +RankExpression+ - (<tt>String</tt>) The
 *             expression to evaluate for ranking or thresholding while
 *             processing a search request. The RankExpression syntax is
 *             based on JavaScript expressions and supports: Integer,
 *             floating point, hex and octal literals Shortcut evaluation
 *             of logical operators such that an expression a || b
 *             evaluates to the value a if a is true without evaluting b at
 *             all JavaScript order of precendence for operators Arithmetic
 *             operators: + - * / % Boolean operators (including the
 *             ternary operator) Bitwise operators Comparison operators
 *             Common mathematic functions: abs ceil erf exp floor lgamma
 *             ln log2 log10 max min sqrt pow Trigonometric library
 *             functions: acosh acos asinh asin atanh atan cosh cos sinh
 *             sin tanh tan Random generation of a number between 0 and 1:
 *             rand Current time in epoch: time The min max functions that
 *             operate on a variable argument list Intermediate results are
 *             calculated as double precision floating point values. The
 *             final return value of a RankExpression is automatically
 *             converted from floating point to a 32-bit unsigned integer
 *             by rounding to the nearest integer, with a natural floor of
 *             0 and a ceiling of max(uint32_t), 4294967295. Mathematical
 *             errors such as dividing by 0 will fail during evaluation and
 *             return a value of 0. The source data for a RankExpression
 *             can be the name of an IndexField of type uint, another
 *             RankExpression or the reserved name text_relevance. The
 *             text_relevance source is defined to return an integer from 0
 *             to 1000 (inclusive) to indicate how relevant a document is
 *             to the search request, taking into account repetition of
 *             search terms in the document and proximity of search terms
 *             to each other in each matching IndexField in the document.
 *             For more information about using rank expressions to
 *             customize ranking, see the Amazon CloudSearch Developer
 *             Guide.
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeServiceAccessPolicies(params, callback)
 *   Calls the DescribeServiceAccessPolicies API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AccessPolicies+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStemmingOptions(params, callback)
 *   Calls the DescribeStemmingOptions API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Stems+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeStopwordOptions(params, callback)
 *   Calls the DescribeStopwordOptions API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Stopwords+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method describeSynonymOptions(params, callback)
 *   Calls the DescribeSynonymOptions API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Synonyms+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method indexDocuments(params, callback)
 *   Calls the IndexDocuments API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +FieldNames+ - (<tt>Array<String></tt>) The names of the fields
 *         that are currently being processed due to an IndexDocuments
 *         action.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateDefaultSearchField(params, callback)
 *   Calls the UpdateDefaultSearchField API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +DefaultSearchField+ - (*required*, <tt>String</tt>) The
 *       IndexField to use for search requests issued with the q
 *       parameter. The default is an empty string, which automatically
 *       searches all text fields.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DefaultSearchField+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>) The name of the
 *           IndexField to use as the default search field. The default is
 *           an empty string, which automatically searches all text fields.
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateServiceAccessPolicies(params, callback)
 *   Calls the UpdateServiceAccessPolicies API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +AccessPolicies+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +AccessPolicies+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateStemmingOptions(params, callback)
 *   Calls the UpdateStemmingOptions API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +Stems+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Stems+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateStopwordOptions(params, callback)
 *   Calls the UpdateStopwordOptions API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +Stopwords+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Stopwords+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateSynonymOptions(params, callback)
 *   Calls the UpdateSynonymOptions API operation.
 *   @param params [Object]
 *     * +DomainName+ - (*required*, <tt>String</tt>)
 *     * +Synonyms+ - (*required*, <tt>String</tt>)
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Synonyms+ - (<tt>Object</tt>)
 *         * +Options+ - (<tt>String</tt>)
 *         * +Status+ - (<tt>Object</tt>)
 *           * +CreationDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was created.
 *           * +UpdateDate+ - (<tt>Date</tt>) A timestamp for
 *             when this option was last updated.
 *           * +UpdateVersion+ - (<tt>Integer</tt>) A unique integer that
 *             indicates when this option was last updated.
 *           * +State+ - (<tt>String</tt>) The state of
 *             processing a change to an option. Possible values:
 *             RequiresIndexDocuments: the option's latest value will not
 *             be visible in searches until IndexDocuments has been called
 *             and indexing is complete. Processing: the option's latest
 *             value is not yet visible in all searches but is in the
 *             process of being activated. Active: the option's latest
 *             value is completely visible. Any warnings or messages
 *             generated during processing are provided in Diagnostics.
 *           * +PendingDeletion+ - (<tt>Boolean</tt>) Indicates that the
 *             option will be deleted once processing is complete.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 *
 * @!method constructor(options)
 *   Constructs a service client object.  This client has one method for
 *   each API operation.
 *   @option options [String] endpoint The endpoint URI to send requests
 *     to.  The default endpoint is built from the configured +region+.
 *     The endpoint should be a string like <tt>'https://s3.amazonaws.com'</tt>.
 *   @option (see AWS.Config.constructor)
 *
 * @!attribute endpoint
 *   @return [AWS.Endpoint] an Endpoint object representing'
 *     the endpoint URL for service requests.'
 *
 */
AWS.CloudSearch.Client = inherit({});
