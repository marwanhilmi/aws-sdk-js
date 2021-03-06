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
 * === Sending a Request Using CloudFront
 *
 *   svc = new AWS.CloudFront();
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
 *   @option (see AWS.CloudFront.Client.constructor)
 *
 * @!attribute client
 *   @return [AWS.CloudFront.Client] A client that provides one method for each
 *     API operation.
 *
 * @see AWS.CloudFront.Client
 *
 */
AWS.CloudFront = inherit({})

/**
 * The low-level CloudFront client class.  This class provides one function
 * for each API operation on the service.
 *
 * @!method createCloudFrontOriginAccessIdentity(params, callback)
 *   Calls the CreateCloudFrontOriginAccessIdentity API operation.
 *   @param params [Object]
 *     * +CloudFrontOriginAccessIdentityConfig+ - (*required*,
 *       <tt>Object</tt>) The origin access identity's configuration
 *       information.
 *       * +CallerReference+ - (*required*, <tt>String</tt>) A unique
 *         number that ensures the request can't be replayed. If the
 *         CallerReference is new (no matter the content of the
 *         CloudFrontOriginAccessIdentityConfig object), a new origin
 *         access identity is created. If the CallerReference is a value
 *         you already sent in a previous request to create an identity,
 *         and the content of the CloudFrontOriginAccessIdentityConfig is
 *         identical to the original request (ignoring white space), the
 *         response includes the same information returned to the
 *         original request. If the CallerReference is a value you
 *         already sent in a previous request to create an identity but
 *         the content of the CloudFrontOriginAccessIdentityConfig is
 *         different from the original request, CloudFront returns a
 *         CloudFrontOriginAccessIdentityAlreadyExists error.
 *       * +Comment+ - (*required*, <tt>String</tt>) Any comments you
 *         want to include about the origin access identity.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CloudFrontOriginAccessIdentity+ - (<tt>Object</tt>) The origin
 *         access identity's information.
 *         * +Id+ - (<tt>String</tt>) The ID for the origin
 *           access identity. For example: E74FTE3AJFJ256A.
 *         * +S3CanonicalUserId+ - (<tt>String</tt>) The Amazon
 *           S3 canonical user ID for the origin access identity, which you
 *           use when giving the origin access identity read permission to
 *           an object in Amazon S3.
 *         * +CloudFrontOriginAccessIdentityConfig+ - (<tt>Object</tt>) The
 *           current configuration information for the identity.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             CloudFrontOriginAccessIdentityConfig object), a new origin
 *             access identity is created. If the CallerReference is a
 *             value you already sent in a previous request to create an
 *             identity, and the content of the
 *             CloudFrontOriginAccessIdentityConfig is identical to the
 *             original request (ignoring white space), the response
 *             includes the same information returned to the original
 *             request. If the CallerReference is a value you already sent
 *             in a previous request to create an identity but the content
 *             of the CloudFrontOriginAccessIdentityConfig is different
 *             from the original request, CloudFront returns a
 *             CloudFrontOriginAccessIdentityAlreadyExists error.
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the origin access identity.
 *       * +Location+ - (<tt>String</tt>) The fully qualified URI of the
 *         new origin access identity just created. For example:
 *         https://cloudfront.amazonaws.com/2010-11-01/origin-access-identity/cloudfront/E74FTE3AJFJ256A.
 *       * +ETag+ - (<tt>String</tt>) The current version of the origin
 *         access identity created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createDistribution(params, callback)
 *   Calls the CreateDistribution API operation.
 *   @param params [Object]
 *     * +DistributionConfig+ - (*required*, <tt>Object</tt>) The
 *       distribution's configuration information.
 *       * +CallerReference+ - (*required*, <tt>String</tt>) A unique
 *         number that ensures the request can't be replayed. If the
 *         CallerReference is new (no matter the content of the
 *         DistributionConfig object), a new distribution is created. If
 *         the CallerReference is a value you already sent in a previous
 *         request to create a distribution, and the content of the
 *         DistributionConfig is identical to the original request
 *         (ignoring white space), the response includes the same
 *         information returned to the original request. If the
 *         CallerReference is a value you already sent in a previous
 *         request to create a distribution but the content of the
 *         DistributionConfig is different from the original request,
 *         CloudFront returns a DistributionAlreadyExists error.
 *       * +Aliases+ - (*required*, <tt>Object</tt>) A complex type that
 *         contains information about CNAMEs (alternate domain names), if
 *         any, for this distribution.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           CNAMEs, if any, for this distribution.
 *         * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *           that contains CNAME elements, if any, for this distribution.
 *           If Quantity is 0, you can omit Items.
 *       * +DefaultRootObject+ - (*required*, <tt>String</tt>) The object
 *         that you want CloudFront to return (for example, index.html)
 *         when an end user requests the root URL for your distribution
 *         (http://www.example.com) instead of an object in your
 *         distribution (http://www.example.com/index.html). Specifying a
 *         default root object avoids exposing the contents of your
 *         distribution. If you don't want to specify a default root
 *         object when you create a distribution, include an empty
 *         DefaultRootObject element. To delete the default root object
 *         from an existing distribution, update the distribution
 *         configuration and include an empty DefaultRootObject element.
 *         To replace the default root object, update the distribution
 *         configuration and specify the new object.
 *       * +Origins+ - (*required*, <tt>Object</tt>) A complex type that
 *         contains information about origins for this distribution.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           origins for this distribution.
 *         * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *           contains origins for this distribution.
 *           * +Id+ - (*required*, <tt>String</tt>) A unique identifier
 *             for the origin. The value of Id must be unique within the
 *             distribution. You use the value of Id when you create a
 *             cache behavior. The Id identifies the origin that
 *             CloudFront routes a request to when the request matches
 *             the path pattern for that cache behavior.
 *           * +DomainName+ - (*required*, <tt>String</tt>) Amazon S3
 *             origins: The DNS name of the Amazon S3 bucket from which
 *             you want CloudFront to get objects for this origin, for
 *             example, myawsbucket.s3.amazonaws.com. Custom origins: The
 *             DNS domain name for the HTTP server from which you want
 *             CloudFront to get objects for this origin, for example,
 *             www.example.com.
 *           * +S3OriginConfig+ - (<tt>Object</tt>) A complex type that
 *             contains information about the Amazon S3 origin. If the
 *             origin is a custom origin, use the CustomOriginConfig
 *             element instead.
 *             * +OriginAccessIdentity+ - (*required*, <tt>String</tt>)
 *               The CloudFront origin access identity to associate with
 *               the origin. Use an origin access identity to configure
 *               the origin so that end users can only access objects in
 *               an Amazon S3 bucket through CloudFront. If you want end
 *               users to be able to access objects using either the
 *               CloudFront URL or the Amazon S3 URL, specify an empty
 *               OriginAccessIdentity element. To delete the origin
 *               access identity from an existing distribution, update
 *               the distribution configuration and include an empty
 *               OriginAccessIdentity element. To replace the origin
 *               access identity, update the distribution configuration
 *               and specify the new origin access identity.
 *           * +CustomOriginConfig+ - (<tt>Object</tt>) A complex type
 *             that contains information about a custom origin. If the
 *             origin is an Amazon S3 bucket, use the S3OriginConfig
 *             element instead.
 *             * +HTTPPort+ - (*required*, <tt>Integer</tt>) The HTTP
 *               port the custom origin listens on.
 *             * +HTTPSPort+ - (*required*, <tt>Integer</tt>) The HTTPS
 *               port the custom origin listens on.
 *             * +OriginProtocolPolicy+ - (*required*, <tt>String</tt>)
 *               The origin protocol policy to apply to your origin.
 *       * +DefaultCacheBehavior+ - (*required*, <tt>Object</tt>) A
 *         complex type that describes the default cache behavior if you
 *         do not specify a CacheBehavior element or if files don't match
 *         any of the values of PathPattern in CacheBehavior elements.You
 *         must create exactly one default cache behavior.
 *         * +TargetOriginId+ - (*required*, <tt>String</tt>) The value
 *           of ID for the origin that you want CloudFront to route
 *           requests to when a request matches the path pattern either
 *           for a cache behavior or for the default cache behavior.
 *         * +ForwardedValues+ - (*required*, <tt>Object</tt>) A complex
 *           type that specifies how CloudFront handles query strings.
 *           * +QueryString+ - (*required*, <tt>Boolean</tt>) Indicates
 *             whether you want CloudFront to forward query strings to
 *             the origin that is associated with this cache behavior. If
 *             so, specify true; if not, specify false.
 *         * +TrustedSigners+ - (*required*, <tt>Object</tt>) A complex
 *           type that specifies the AWS accounts, if any, that you want
 *           to allow to create signed URLs for private content. If you
 *           want to require signed URLs in requests for objects in the
 *           target origin that match the PathPattern for this cache
 *           behavior, specify true for Enabled, and specify the
 *           applicable values for Quantity and Items. For more
 *           information, go to Using a Signed URL to Serve Private
 *           Content in the Amazon CloudFront Developer Guide. If you
 *           don't want to require signed URLs in requests for objects
 *           that match PathPattern, specify false for Enabled and 0 for
 *           Quantity. Omit Items. To add, change, or remove one or more
 *           trusted signers, change Enabled to true (if it's currently
 *           false), change Quantity as applicable, and specify all of
 *           the trusted signers that you want to include in the updated
 *           distribution.
 *           * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies
 *             whether you want to require end users to use signed URLs
 *             to access the files specified by PathPattern and
 *             TargetOriginId.
 *           * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *             trusted signers for this cache behavior.
 *           * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *             type that contains trusted signers for this cache
 *             behavior. If Quantity is 0, you can omit Items.
 *         * +ViewerProtocolPolicy+ - (*required*, <tt>String</tt>) Use
 *           this element to specify the protocol that users can use to
 *           access the files in the origin specified by TargetOriginId
 *           when a request matches the path pattern in PathPattern. If
 *           you want CloudFront to allow end users to use any available
 *           protocol, specify allow-all. If you want CloudFront to
 *           require HTTPS, specify https.
 *         * +MinTTL+ - (*required*, <tt>Integer</tt>) The minimum amount
 *           of time that you want objects to stay in CloudFront caches
 *           before CloudFront queries your origin to see whether the
 *           object has been updated.You can specify a value from 0 to
 *           3,153,600,000 seconds (100 years).
 *       * +CacheBehaviors+ - (*required*, <tt>Object</tt>) A complex
 *         type that contains zero or more CacheBehavior elements.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           cache behaviors for this distribution.
 *         * +Items+ - (<tt>Array<Object></tt>) Optional: A complex type
 *           that contains cache behaviors for this distribution. If
 *           Quantity is 0, you can omit Items.
 *           * +PathPattern+ - (*required*, <tt>String</tt>) The pattern
 *             (for example, images/*.jpg) that specifies which requests
 *             you want this cache behavior to apply to. When CloudFront
 *             receives an end-user request, the requested path is
 *             compared with path patterns in the order in which cache
 *             behaviors are listed in the distribution. The path pattern
 *             for the default cache behavior is * and cannot be changed.
 *             If the request for an object does not match the path
 *             pattern for any cache behaviors, CloudFront applies the
 *             behavior in the default cache behavior.
 *           * +TargetOriginId+ - (*required*, <tt>String</tt>) The value
 *             of ID for the origin that you want CloudFront to route
 *             requests to when a request matches the path pattern either
 *             for a cache behavior or for the default cache behavior.
 *           * +ForwardedValues+ - (*required*, <tt>Object</tt>) A
 *             complex type that specifies how CloudFront handles query
 *             strings.
 *             * +QueryString+ - (*required*, <tt>Boolean</tt>) Indicates
 *               whether you want CloudFront to forward query strings to
 *               the origin that is associated with this cache behavior.
 *               If so, specify true; if not, specify false.
 *           * +TrustedSigners+ - (*required*, <tt>Object</tt>) A complex
 *             type that specifies the AWS accounts, if any, that you
 *             want to allow to create signed URLs for private content.
 *             If you want to require signed URLs in requests for objects
 *             in the target origin that match the PathPattern for this
 *             cache behavior, specify true for Enabled, and specify the
 *             applicable values for Quantity and Items. For more
 *             information, go to Using a Signed URL to Serve Private
 *             Content in the Amazon CloudFront Developer Guide. If you
 *             don't want to require signed URLs in requests for objects
 *             that match PathPattern, specify false for Enabled and 0
 *             for Quantity. Omit Items. To add, change, or remove one or
 *             more trusted signers, change Enabled to true (if it's
 *             currently false), change Quantity as applicable, and
 *             specify all of the trusted signers that you want to
 *             include in the updated distribution.
 *             * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies
 *               whether you want to require end users to use signed URLs
 *               to access the files specified by PathPattern and
 *               TargetOriginId.
 *             * +Quantity+ - (*required*, <tt>Integer</tt>) The number
 *               of trusted signers for this cache behavior.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains trusted signers for this cache
 *               behavior. If Quantity is 0, you can omit Items.
 *           * +ViewerProtocolPolicy+ - (*required*, <tt>String</tt>) Use
 *             this element to specify the protocol that users can use to
 *             access the files in the origin specified by TargetOriginId
 *             when a request matches the path pattern in PathPattern. If
 *             you want CloudFront to allow end users to use any
 *             available protocol, specify allow-all. If you want
 *             CloudFront to require HTTPS, specify https.
 *           * +MinTTL+ - (*required*, <tt>Integer</tt>) The minimum
 *             amount of time that you want objects to stay in CloudFront
 *             caches before CloudFront queries your origin to see
 *             whether the object has been updated.You can specify a
 *             value from 0 to 3,153,600,000 seconds (100 years).
 *       * +Comment+ - (*required*, <tt>String</tt>) Any comments you
 *         want to include about the distribution.
 *       * +Logging+ - (*required*, <tt>Object</tt>) A complex type that
 *         controls whether access logs are written for the distribution.
 *         * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies whether
 *           you want CloudFront to save access logs to an Amazon S3
 *           bucket. If you do not want to enable logging when you create
 *           a distribution or if you want to disable logging for an
 *           existing distribution, specify false for Enabled, and
 *           specify empty Bucket and Prefix elements. If you specify
 *           false for Enabled but you specify values for Bucket and
 *           Prefix, the values are automatically deleted.
 *         * +Bucket+ - (*required*, <tt>String</tt>) The Amazon S3
 *           bucket to store the access logs in, for example,
 *           myawslogbucket.s3.amazonaws.com.
 *         * +Prefix+ - (*required*, <tt>String</tt>) An optional string
 *           that you want CloudFront to prefix to the access log
 *           filenames for this distribution, for example, myprefix/. If
 *           you want to enable logging, but you do not want to specify a
 *           prefix, you still must include an empty Prefix element in
 *           the Logging element.
 *       * +Enabled+ - (*required*, <tt>Boolean</tt>) Whether the
 *         distribution is enabled to accept end user requests for
 *         content.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Distribution+ - (<tt>Object</tt>) The distribution's
 *         information.
 *         * +Id+ - (<tt>String</tt>) The identifier for the
 *           distribution. For example: EDFDVBD632BHDS5.
 *         * +Status+ - (<tt>String</tt>) This response element
 *           indicates the current status of the distribution. When the
 *           status is Deployed, the distribution's information is fully
 *           propagated throughout the Amazon CloudFront system.
 *         * +LastModifiedTime+ - (<tt>Date</tt>) The date and
 *           time the distribution was last modified.
 *         * +InProgressInvalidationBatches+ - (*required*,
 *           <tt>Integer</tt>) The number of invalidation batches currently
 *           in progress.
 *         * +DomainName+ - (<tt>String</tt>) The domain name
 *           corresponding to the distribution. For example:
 *           d604721fxaaqy9.cloudfront.net.
 *         * +ActiveTrustedSigners+ - (<tt>Object</tt>)
 *           CloudFront automatically adds this element to the response
 *           only if you've set up the distribution to serve private
 *           content with signed URLs. The element lists the key pair IDs
 *           that CloudFront is aware of for each trusted signer. The
 *           Signer child element lists the AWS account number of the
 *           trusted signer (or an empty Self element if the signer is
 *           you). The Signer element also includes the IDs of any active
 *           key pairs associated with the trusted signer's AWS account. If
 *           no KeyPairId element appears for a Signer, that signer can't
 *           create working signed URLs.
 *           * +Enabled+ - (<tt>Boolean</tt>) Each active
 *             trusted signer.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             unique trusted signers included in all cache behaviors. For
 *             example, if three cache behaviors all list the same three
 *             AWS accounts, the value of Quantity for ActiveTrustedSigners
 *             will be 3.
 *           * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *             contains one Signer complex type for each unique trusted
 *             signer that is specified in the TrustedSigners complex type,
 *             including trusted signers in the default cache behavior and
 *             in all of the other cache behaviors.
 *             * +AwsAccountNumber+ - (<tt>String</tt>) Specifies an AWS
 *               account that can create signed URLs. Values: self, which
 *               indicates that the AWS account that was used to create the
 *               distribution can created signed URLs, or an AWS account
 *               number. Omit the dashes in the account number.
 *             * +KeyPairIds+ - (<tt>Object</tt>) A complex type that lists
 *               the active CloudFront key pairs, if any, that are
 *               associated with AwsAccountNumber.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of active CloudFront key pairs for AwsAccountNumber.
 *               * +Items+ - (<tt>Array<String></tt>) A complex type that
 *                 lists the active CloudFront key pairs, if any, that are
 *                 associated with AwsAccountNumber.
 *         * +DistributionConfig+ - (<tt>Object</tt>) The
 *           current configuration information for the distribution.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             DistributionConfig object), a new distribution is created.
 *             If the CallerReference is a value you already sent in a
 *             previous request to create a distribution, and the content
 *             of the DistributionConfig is identical to the original
 *             request (ignoring white space), the response includes the
 *             same information returned to the original request. If the
 *             CallerReference is a value you already sent in a previous
 *             request to create a distribution but the content of the
 *             DistributionConfig is different from the original request,
 *             CloudFront returns a DistributionAlreadyExists error.
 *           * +Aliases+ - (<tt>Object</tt>) A complex type
 *             that contains information about CNAMEs (alternate domain
 *             names), if any, for this distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               CNAMEs, if any, for this distribution.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains CNAME elements, if any, for this
 *               distribution. If Quantity is 0, you can omit Items.
 *           * +DefaultRootObject+ - (<tt>String</tt>) The
 *             object that you want CloudFront to return (for example,
 *             index.html) when an end user requests the root URL for your
 *             distribution (http://www.example.com) instead of an object
 *             in your distribution (http://www.example.com/index.html).
 *             Specifying a default root object avoids exposing the
 *             contents of your distribution. If you don't want to specify
 *             a default root object when you create a distribution,
 *             include an empty DefaultRootObject element. To delete the
 *             default root object from an existing distribution, update
 *             the distribution configuration and include an empty
 *             DefaultRootObject element. To replace the default root
 *             object, update the distribution configuration and specify
 *             the new object.
 *           * +Origins+ - (<tt>Object</tt>) A complex type
 *             that contains information about origins for this
 *             distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               origins for this distribution.
 *             * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *               contains origins for this distribution.
 *               * +Id+ - (<tt>String</tt>) A unique identifier
 *                 for the origin. The value of Id must be unique within
 *                 the distribution. You use the value of Id when you
 *                 create a cache behavior. The Id identifies the origin
 *                 that CloudFront routes a request to when the request
 *                 matches the path pattern for that cache behavior.
 *               * +DomainName+ - (<tt>String</tt>) Amazon S3
 *                 origins: The DNS name of the Amazon S3 bucket from which
 *                 you want CloudFront to get objects for this origin, for
 *                 example, myawsbucket.s3.amazonaws.com. Custom origins:
 *                 The DNS domain name for the HTTP server from which you
 *                 want CloudFront to get objects for this origin, for
 *                 example, www.example.com.
 *               * +S3OriginConfig+ - (<tt>Object</tt>) A complex type that
 *                 contains information about the Amazon S3 origin. If the
 *                 origin is a custom origin, use the CustomOriginConfig
 *                 element instead.
 *                 * +OriginAccessIdentity+ - (<tt>String</tt>)
 *                   The CloudFront origin access identity to associate
 *                   with the origin. Use an origin access identity to
 *                   configure the origin so that end users can only access
 *                   objects in an Amazon S3 bucket through CloudFront. If
 *                   you want end users to be able to access objects using
 *                   either the CloudFront URL or the Amazon S3 URL,
 *                   specify an empty OriginAccessIdentity element. To
 *                   delete the origin access identity from an existing
 *                   distribution, update the distribution configuration
 *                   and include an empty OriginAccessIdentity element. To
 *                   replace the origin access identity, update the
 *                   distribution configuration and specify the new origin
 *                   access identity.
 *               * +CustomOriginConfig+ - (<tt>Object</tt>) A complex type
 *                 that contains information about a custom origin. If the
 *                 origin is an Amazon S3 bucket, use the S3OriginConfig
 *                 element instead.
 *                 * +HTTPPort+ - (<tt>Integer</tt>) The HTTP
 *                   port the custom origin listens on.
 *                 * +HTTPSPort+ - (<tt>Integer</tt>) The HTTPS
 *                   port the custom origin listens on.
 *                 * +OriginProtocolPolicy+ - (<tt>String</tt>)
 *                   The origin protocol policy to apply to your origin.
 *           * +DefaultCacheBehavior+ - (<tt>Object</tt>) A
 *             complex type that describes the default cache behavior if
 *             you do not specify a CacheBehavior element or if files don't
 *             match any of the values of PathPattern in CacheBehavior
 *             elements.You must create exactly one default cache behavior.
 *             * +TargetOriginId+ - (<tt>String</tt>) The value
 *               of ID for the origin that you want CloudFront to route
 *               requests to when a request matches the path pattern either
 *               for a cache behavior or for the default cache behavior.
 *             * +ForwardedValues+ - (<tt>Object</tt>) A
 *               complex type that specifies how CloudFront handles query
 *               strings.
 *               * +QueryString+ - (<tt>Boolean</tt>) Indicates
 *                 whether you want CloudFront to forward query strings to
 *                 the origin that is associated with this cache behavior.
 *                 If so, specify true; if not, specify false.
 *             * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *               type that specifies the AWS accounts, if any, that you
 *               want to allow to create signed URLs for private content.
 *               If you want to require signed URLs in requests for objects
 *               in the target origin that match the PathPattern for this
 *               cache behavior, specify true for Enabled, and specify the
 *               applicable values for Quantity and Items. For more
 *               information, go to Using a Signed URL to Serve Private
 *               Content in the Amazon CloudFront Developer Guide. If you
 *               don't want to require signed URLs in requests for objects
 *               that match PathPattern, specify false for Enabled and 0
 *               for Quantity. Omit Items. To add, change, or remove one or
 *               more trusted signers, change Enabled to true (if it's
 *               currently false), change Quantity as applicable, and
 *               specify all of the trusted signers that you want to
 *               include in the updated distribution.
 *               * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                 whether you want to require end users to use signed URLs
 *                 to access the files specified by PathPattern and
 *                 TargetOriginId.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of trusted signers for this cache behavior.
 *               * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                 type that contains trusted signers for this cache
 *                 behavior. If Quantity is 0, you can omit Items.
 *             * +ViewerProtocolPolicy+ - (<tt>String</tt>) Use
 *               this element to specify the protocol that users can use to
 *               access the files in the origin specified by TargetOriginId
 *               when a request matches the path pattern in PathPattern. If
 *               you want CloudFront to allow end users to use any
 *               available protocol, specify allow-all. If you want
 *               CloudFront to require HTTPS, specify https.
 *             * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *               amount of time that you want objects to stay in CloudFront
 *               caches before CloudFront queries your origin to see
 *               whether the object has been updated.You can specify a
 *               value from 0 to 3,153,600,000 seconds (100 years).
 *           * +CacheBehaviors+ - (<tt>Object</tt>) A complex
 *             type that contains zero or more CacheBehavior elements.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               cache behaviors for this distribution.
 *             * +Items+ - (<tt>Array<Object></tt>) Optional: A complex
 *               type that contains cache behaviors for this distribution.
 *               If Quantity is 0, you can omit Items.
 *               * +PathPattern+ - (<tt>String</tt>) The
 *                 pattern (for example, images/*.jpg) that specifies which
 *                 requests you want this cache behavior to apply to. When
 *                 CloudFront receives an end-user request, the requested
 *                 path is compared with path patterns in the order in
 *                 which cache behaviors are listed in the distribution.
 *                 The path pattern for the default cache behavior is * and
 *                 cannot be changed. If the request for an object does not
 *                 match the path pattern for any cache behaviors,
 *                 CloudFront applies the behavior in the default cache
 *                 behavior.
 *               * +TargetOriginId+ - (<tt>String</tt>) The
 *                 value of ID for the origin that you want CloudFront to
 *                 route requests to when a request matches the path
 *                 pattern either for a cache behavior or for the default
 *                 cache behavior.
 *               * +ForwardedValues+ - (<tt>Object</tt>) A
 *                 complex type that specifies how CloudFront handles query
 *                 strings.
 *                 * +QueryString+ - (<tt>Boolean</tt>)
 *                   Indicates whether you want CloudFront to forward query
 *                   strings to the origin that is associated with this
 *                   cache behavior. If so, specify true; if not, specify
 *                   false.
 *               * +TrustedSigners+ - (<tt>Object</tt>) A
 *                 complex type that specifies the AWS accounts, if any,
 *                 that you want to allow to create signed URLs for private
 *                 content. If you want to require signed URLs in requests
 *                 for objects in the target origin that match the
 *                 PathPattern for this cache behavior, specify true for
 *                 Enabled, and specify the applicable values for Quantity
 *                 and Items. For more information, go to Using a Signed
 *                 URL to Serve Private Content in the Amazon CloudFront
 *                 Developer Guide. If you don't want to require signed
 *                 URLs in requests for objects that match PathPattern,
 *                 specify false for Enabled and 0 for Quantity. Omit
 *                 Items. To add, change, or remove one or more trusted
 *                 signers, change Enabled to true (if it's currently
 *                 false), change Quantity as applicable, and specify all
 *                 of the trusted signers that you want to include in the
 *                 updated distribution.
 *                 * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                   whether you want to require end users to use signed
 *                   URLs to access the files specified by PathPattern and
 *                   TargetOriginId.
 *                 * +Quantity+ - (<tt>Integer</tt>) The number
 *                   of trusted signers for this cache behavior.
 *                 * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                   type that contains trusted signers for this cache
 *                   behavior. If Quantity is 0, you can omit Items.
 *               * +ViewerProtocolPolicy+ - (<tt>String</tt>)
 *                 Use this element to specify the protocol that users can
 *                 use to access the files in the origin specified by
 *                 TargetOriginId when a request matches the path pattern
 *                 in PathPattern. If you want CloudFront to allow end
 *                 users to use any available protocol, specify allow-all.
 *                 If you want CloudFront to require HTTPS, specify https.
 *               * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *                 amount of time that you want objects to stay in
 *                 CloudFront caches before CloudFront queries your origin
 *                 to see whether the object has been updated.You can
 *                 specify a value from 0 to 3,153,600,000 seconds (100
 *                 years).
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the distribution.
 *           * +Logging+ - (<tt>Object</tt>) A complex type
 *             that controls whether access logs are written for the
 *             distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want CloudFront to save access logs to an
 *               Amazon S3 bucket. If you do not want to enable logging
 *               when you create a distribution or if you want to disable
 *               logging for an existing distribution, specify false for
 *               Enabled, and specify empty Bucket and Prefix elements. If
 *               you specify false for Enabled but you specify values for
 *               Bucket and Prefix, the values are automatically deleted.
 *             * +Bucket+ - (<tt>String</tt>) The Amazon S3
 *               bucket to store the access logs in, for example,
 *               myawslogbucket.s3.amazonaws.com.
 *             * +Prefix+ - (<tt>String</tt>) An optional
 *               string that you want CloudFront to prefix to the access
 *               log filenames for this distribution, for example,
 *               myprefix/. If you want to enable logging, but you do not
 *               want to specify a prefix, you still must include an empty
 *               Prefix element in the Logging element.
 *           * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *             distribution is enabled to accept end user requests for
 *             content.
 *       * +Location+ - (<tt>String</tt>) The fully qualified URI of the
 *         new distribution resource just created. For example:
 *         https://cloudfront.amazonaws.com/2010-11-01/distribution/EDFDVBD632BHDS5.
 *       * +ETag+ - (<tt>String</tt>) The current version of the
 *         distribution created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createInvalidation(params, callback)
 *   Calls the CreateInvalidation API operation.
 *   @param params [Object]
 *     * +DistributionId+ - (*required*, <tt>String</tt>) The
 *       distribution's id.
 *     * +InvalidationBatch+ - (*required*, <tt>Object</tt>) The batch
 *       information for the invalidation.
 *       * +Paths+ - (*required*, <tt>Object</tt>) The path of the object
 *         to invalidate. The path is relative to the distribution and
 *         must begin with a slash (/). You must enclose each
 *         invalidation object with the Path element tags. If the path
 *         includes non-ASCII characters or unsafe characters as defined
 *         in RFC 1783 (http://www.ietf.org/rfc/rfc1738.txt), URL encode
 *         those characters. Do not URL encode any other characters in
 *         the path, or CloudFront will not invalidate the old version of
 *         the updated object.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           objects that you want to invalidate.
 *         * +Items+ - (<tt>Array<String></tt>) A complex type that
 *           contains a list of the objects that you want to invalidate.
 *       * +CallerReference+ - (*required*, <tt>String</tt>) A unique
 *         name that ensures the request can't be replayed. If the
 *         CallerReference is new (no matter the content of the Path
 *         object), a new distribution is created. If the CallerReference
 *         is a value you already sent in a previous request to create an
 *         invalidation batch, and the content of each Path element is
 *         identical to the original request, the response includes the
 *         same information returned to the original request. If the
 *         CallerReference is a value you already sent in a previous
 *         request to create a distribution but the content of any Path
 *         is different from the original request, CloudFront returns an
 *         InvalidationBatchAlreadyExists error.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Location+ - (<tt>String</tt>) The fully qualified URI of the
 *         distribution and invalidation batch request, including the
 *         Invalidation ID.
 *       * +Invalidation+ - (<tt>Object</tt>) The invalidation's
 *         information.
 *         * +Id+ - (<tt>String</tt>) The identifier for the
 *           invalidation request. For example: IDFDVBD632BHDS5.
 *         * +Status+ - (<tt>String</tt>) The status of the
 *           invalidation request. When the invalidation batch is finished,
 *           the status is Completed.
 *         * +CreateTime+ - (<tt>Date</tt>) The date and time
 *           the invalidation request was first made.
 *         * +InvalidationBatch+ - (<tt>Object</tt>) The
 *           current invalidation information for the batch request.
 *           * +Paths+ - (<tt>Object</tt>) The path of the
 *             object to invalidate. The path is relative to the
 *             distribution and must begin with a slash (/). You must
 *             enclose each invalidation object with the Path element tags.
 *             If the path includes non-ASCII characters or unsafe
 *             characters as defined in RFC 1783
 *             (http://www.ietf.org/rfc/rfc1738.txt), URL encode those
 *             characters. Do not URL encode any other characters in the
 *             path, or CloudFront will not invalidate the old version of
 *             the updated object.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               objects that you want to invalidate.
 *             * +Items+ - (<tt>Array<String></tt>) A complex type that
 *               contains a list of the objects that you want to
 *               invalidate.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             name that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the Path
 *             object), a new distribution is created. If the
 *             CallerReference is a value you already sent in a previous
 *             request to create an invalidation batch, and the content of
 *             each Path element is identical to the original request, the
 *             response includes the same information returned to the
 *             original request. If the CallerReference is a value you
 *             already sent in a previous request to create a distribution
 *             but the content of any Path is different from the original
 *             request, CloudFront returns an
 *             InvalidationBatchAlreadyExists error.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method createStreamingDistribution(params, callback)
 *   Calls the CreateStreamingDistribution API operation.
 *   @param params [Object]
 *     * +StreamingDistributionConfig+ - (*required*, <tt>Object</tt>)
 *       The streaming distribution's configuration information.
 *       * +CallerReference+ - (*required*, <tt>String</tt>) A unique
 *         number that ensures the request can't be replayed. If the
 *         CallerReference is new (no matter the content of the
 *         StreamingDistributionConfig object), a new streaming
 *         distribution is created. If the CallerReference is a value you
 *         already sent in a previous request to create a streaming
 *         distribution, and the content of the
 *         StreamingDistributionConfig is identical to the original
 *         request (ignoring white space), the response includes the same
 *         information returned to the original request. If the
 *         CallerReference is a value you already sent in a previous
 *         request to create a streaming distribution but the content of
 *         the StreamingDistributionConfig is different from the original
 *         request, CloudFront returns a DistributionAlreadyExists error.
 *       * +S3Origin+ - (*required*, <tt>Object</tt>) A complex type that
 *         contains information about the Amazon S3 bucket from which you
 *         want CloudFront to get your media files for distribution.
 *         * +DomainName+ - (*required*, <tt>String</tt>) The DNS name of
 *           the S3 origin.
 *         * +OriginAccessIdentity+ - (*required*, <tt>String</tt>) Your
 *           S3 origin's origin access identity.
 *       * +Aliases+ - (*required*, <tt>Object</tt>) A complex type that
 *         contains information about CNAMEs (alternate domain names), if
 *         any, for this streaming distribution.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           CNAMEs, if any, for this distribution.
 *         * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *           that contains CNAME elements, if any, for this distribution.
 *           If Quantity is 0, you can omit Items.
 *       * +Comment+ - (*required*, <tt>String</tt>) Any comments you
 *         want to include about the streaming distribution.
 *       * +Logging+ - (*required*, <tt>Object</tt>) A complex type that
 *         controls whether access logs are written for the streaming
 *         distribution.
 *         * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies whether
 *           you want CloudFront to save access logs to an Amazon S3
 *           bucket. If you do not want to enable logging when you create
 *           a distribution or if you want to disable logging for an
 *           existing distribution, specify false for Enabled, and
 *           specify empty Bucket and Prefix elements. If you specify
 *           false for Enabled but you specify values for Bucket and
 *           Prefix, the values are automatically deleted.
 *         * +Bucket+ - (*required*, <tt>String</tt>) The Amazon S3
 *           bucket to store the access logs in, for example,
 *           myawslogbucket.s3.amazonaws.com.
 *         * +Prefix+ - (*required*, <tt>String</tt>) An optional string
 *           that you want CloudFront to prefix to the access log
 *           filenames for this distribution, for example, myprefix/. If
 *           you want to enable logging, but you do not want to specify a
 *           prefix, you still must include an empty Prefix element in
 *           the Logging element.
 *       * +TrustedSigners+ - (*required*, <tt>Object</tt>) A complex
 *         type that specifies the AWS accounts, if any, that you want to
 *         allow to create signed URLs for private content. If you want
 *         to require signed URLs in requests for objects in the target
 *         origin that match the PathPattern for this cache behavior,
 *         specify true for Enabled, and specify the applicable values
 *         for Quantity and Items. For more information, go to Using a
 *         Signed URL to Serve Private Content in the Amazon CloudFront
 *         Developer Guide. If you don't want to require signed URLs in
 *         requests for objects that match PathPattern, specify false for
 *         Enabled and 0 for Quantity. Omit Items. To add, change, or
 *         remove one or more trusted signers, change Enabled to true (if
 *         it's currently false), change Quantity as applicable, and
 *         specify all of the trusted signers that you want to include in
 *         the updated distribution.
 *         * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies whether
 *           you want to require end users to use signed URLs to access
 *           the files specified by PathPattern and TargetOriginId.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           trusted signers for this cache behavior.
 *         * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *           that contains trusted signers for this cache behavior. If
 *           Quantity is 0, you can omit Items.
 *       * +Enabled+ - (*required*, <tt>Boolean</tt>) Whether the
 *         streaming distribution is enabled to accept end user requests
 *         for content.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StreamingDistribution+ - (<tt>Object</tt>) The streaming
 *         distribution's information.
 *         * +Id+ - (<tt>String</tt>) The identifier for the
 *           streaming distribution. For example: EGTXBD79H29TRA8.
 *         * +Status+ - (<tt>String</tt>) The current status of
 *           the streaming distribution. When the status is Deployed, the
 *           distribution's information is fully propagated throughout the
 *           Amazon CloudFront system.
 *         * +LastModifiedTime+ - (<tt>Date</tt>) The date and time the
 *           distribution was last modified.
 *         * +DomainName+ - (<tt>String</tt>) The domain name
 *           corresponding to the streaming distribution. For example:
 *           s5c39gqb8ow64r.cloudfront.net.
 *         * +ActiveTrustedSigners+ - (<tt>Object</tt>)
 *           CloudFront automatically adds this element to the response
 *           only if you've set up the distribution to serve private
 *           content with signed URLs. The element lists the key pair IDs
 *           that CloudFront is aware of for each trusted signer. The
 *           Signer child element lists the AWS account number of the
 *           trusted signer (or an empty Self element if the signer is
 *           you). The Signer element also includes the IDs of any active
 *           key pairs associated with the trusted signer's AWS account. If
 *           no KeyPairId element appears for a Signer, that signer can't
 *           create working signed URLs.
 *           * +Enabled+ - (<tt>Boolean</tt>) Each active
 *             trusted signer.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             unique trusted signers included in all cache behaviors. For
 *             example, if three cache behaviors all list the same three
 *             AWS accounts, the value of Quantity for ActiveTrustedSigners
 *             will be 3.
 *           * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *             contains one Signer complex type for each unique trusted
 *             signer that is specified in the TrustedSigners complex type,
 *             including trusted signers in the default cache behavior and
 *             in all of the other cache behaviors.
 *             * +AwsAccountNumber+ - (<tt>String</tt>) Specifies an AWS
 *               account that can create signed URLs. Values: self, which
 *               indicates that the AWS account that was used to create the
 *               distribution can created signed URLs, or an AWS account
 *               number. Omit the dashes in the account number.
 *             * +KeyPairIds+ - (<tt>Object</tt>) A complex type that lists
 *               the active CloudFront key pairs, if any, that are
 *               associated with AwsAccountNumber.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of active CloudFront key pairs for AwsAccountNumber.
 *               * +Items+ - (<tt>Array<String></tt>) A complex type that
 *                 lists the active CloudFront key pairs, if any, that are
 *                 associated with AwsAccountNumber.
 *         * +StreamingDistributionConfig+ - (<tt>Object</tt>)
 *           The current configuration information for the streaming
 *           distribution.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             StreamingDistributionConfig object), a new streaming
 *             distribution is created. If the CallerReference is a value
 *             you already sent in a previous request to create a streaming
 *             distribution, and the content of the
 *             StreamingDistributionConfig is identical to the original
 *             request (ignoring white space), the response includes the
 *             same information returned to the original request. If the
 *             CallerReference is a value you already sent in a previous
 *             request to create a streaming distribution but the content
 *             of the StreamingDistributionConfig is different from the
 *             original request, CloudFront returns a
 *             DistributionAlreadyExists error.
 *           * +S3Origin+ - (<tt>Object</tt>) A complex type
 *             that contains information about the Amazon S3 bucket from
 *             which you want CloudFront to get your media files for
 *             distribution.
 *             * +DomainName+ - (<tt>String</tt>) The DNS name
 *               of the S3 origin.
 *             * +OriginAccessIdentity+ - (<tt>String</tt>)
 *               Your S3 origin's origin access identity.
 *           * +Aliases+ - (<tt>Object</tt>) A complex type
 *             that contains information about CNAMEs (alternate domain
 *             names), if any, for this streaming distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               CNAMEs, if any, for this distribution.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains CNAME elements, if any, for this
 *               distribution. If Quantity is 0, you can omit Items.
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the streaming distribution.
 *           * +Logging+ - (<tt>Object</tt>) A complex type
 *             that controls whether access logs are written for the
 *             streaming distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want CloudFront to save access logs to an
 *               Amazon S3 bucket. If you do not want to enable logging
 *               when you create a distribution or if you want to disable
 *               logging for an existing distribution, specify false for
 *               Enabled, and specify empty Bucket and Prefix elements. If
 *               you specify false for Enabled but you specify values for
 *               Bucket and Prefix, the values are automatically deleted.
 *             * +Bucket+ - (<tt>String</tt>) The Amazon S3
 *               bucket to store the access logs in, for example,
 *               myawslogbucket.s3.amazonaws.com.
 *             * +Prefix+ - (<tt>String</tt>) An optional
 *               string that you want CloudFront to prefix to the access
 *               log filenames for this distribution, for example,
 *               myprefix/. If you want to enable logging, but you do not
 *               want to specify a prefix, you still must include an empty
 *               Prefix element in the Logging element.
 *           * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *             type that specifies the AWS accounts, if any, that you want
 *             to allow to create signed URLs for private content. If you
 *             want to require signed URLs in requests for objects in the
 *             target origin that match the PathPattern for this cache
 *             behavior, specify true for Enabled, and specify the
 *             applicable values for Quantity and Items. For more
 *             information, go to Using a Signed URL to Serve Private
 *             Content in the Amazon CloudFront Developer Guide. If you
 *             don't want to require signed URLs in requests for objects
 *             that match PathPattern, specify false for Enabled and 0 for
 *             Quantity. Omit Items. To add, change, or remove one or more
 *             trusted signers, change Enabled to true (if it's currently
 *             false), change Quantity as applicable, and specify all of
 *             the trusted signers that you want to include in the updated
 *             distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want to require end users to use signed URLs
 *               to access the files specified by PathPattern and
 *               TargetOriginId.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               trusted signers for this cache behavior.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains trusted signers for this cache
 *               behavior. If Quantity is 0, you can omit Items.
 *           * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *             streaming distribution is enabled to accept end user
 *             requests for content.
 *       * +Location+ - (<tt>String</tt>) The fully qualified URI of the
 *         new streaming distribution resource just created. For example:
 *         https://cloudfront.amazonaws.com/2010-11-01/streaming-distribution/EGTXBD79H29TRA8.
 *       * +ETag+ - (<tt>String</tt>) The current version of the streaming
 *         distribution created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteCloudFrontOriginAccessIdentity(params, callback)
 *   Calls the DeleteCloudFrontOriginAccessIdentity API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The origin access identity's id.
 *     * +IfMatch+ - (<tt>String</tt>) The value of the ETag header you
 *       received from a previous GET or PUT request. For example:
 *       E2QWRUHAPOMQZL.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteDistribution(params, callback)
 *   Calls the DeleteDistribution API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The distribution id.
 *     * +IfMatch+ - (<tt>String</tt>) The value of the ETag header you
 *       received when you disabled the distribution. For example:
 *       E2QWRUHAPOMQZL.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method deleteStreamingDistribution(params, callback)
 *   Calls the DeleteStreamingDistribution API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The distribution id.
 *     * +IfMatch+ - (<tt>String</tt>) The value of the ETag header you
 *       received when you disabled the streaming distribution. For
 *       example: E2QWRUHAPOMQZL.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getCloudFrontOriginAccessIdentity(params, callback)
 *   Calls the GetCloudFrontOriginAccessIdentity API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The identity's id.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CloudFrontOriginAccessIdentity+ - (<tt>Object</tt>) The origin
 *         access identity's information.
 *         * +Id+ - (<tt>String</tt>) The ID for the origin
 *           access identity. For example: E74FTE3AJFJ256A.
 *         * +S3CanonicalUserId+ - (<tt>String</tt>) The Amazon
 *           S3 canonical user ID for the origin access identity, which you
 *           use when giving the origin access identity read permission to
 *           an object in Amazon S3.
 *         * +CloudFrontOriginAccessIdentityConfig+ - (<tt>Object</tt>) The
 *           current configuration information for the identity.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             CloudFrontOriginAccessIdentityConfig object), a new origin
 *             access identity is created. If the CallerReference is a
 *             value you already sent in a previous request to create an
 *             identity, and the content of the
 *             CloudFrontOriginAccessIdentityConfig is identical to the
 *             original request (ignoring white space), the response
 *             includes the same information returned to the original
 *             request. If the CallerReference is a value you already sent
 *             in a previous request to create an identity but the content
 *             of the CloudFrontOriginAccessIdentityConfig is different
 *             from the original request, CloudFront returns a
 *             CloudFrontOriginAccessIdentityAlreadyExists error.
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the origin access identity.
 *       * +ETag+ - (<tt>String</tt>) The current version of the origin
 *         access identity's information. For example: E2QWRUHAPOMQZL.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getCloudFrontOriginAccessIdentityConfig(params, callback)
 *   Calls the GetCloudFrontOriginAccessIdentityConfig API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The identity's id.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CloudFrontOriginAccessIdentityConfig+ - (<tt>Object</tt>) The
 *         origin access identity's configuration information.
 *         * +CallerReference+ - (<tt>String</tt>) A unique
 *           number that ensures the request can't be replayed. If the
 *           CallerReference is new (no matter the content of the
 *           CloudFrontOriginAccessIdentityConfig object), a new origin
 *           access identity is created. If the CallerReference is a value
 *           you already sent in a previous request to create an identity,
 *           and the content of the CloudFrontOriginAccessIdentityConfig is
 *           identical to the original request (ignoring white space), the
 *           response includes the same information returned to the
 *           original request. If the CallerReference is a value you
 *           already sent in a previous request to create an identity but
 *           the content of the CloudFrontOriginAccessIdentityConfig is
 *           different from the original request, CloudFront returns a
 *           CloudFrontOriginAccessIdentityAlreadyExists error.
 *         * +Comment+ - (<tt>String</tt>) Any comments you
 *           want to include about the origin access identity.
 *       * +ETag+ - (<tt>String</tt>) The current version of the
 *         configuration. For example: E2QWRUHAPOMQZL.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getDistribution(params, callback)
 *   Calls the GetDistribution API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The distribution's id.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Distribution+ - (<tt>Object</tt>) The distribution's
 *         information.
 *         * +Id+ - (<tt>String</tt>) The identifier for the
 *           distribution. For example: EDFDVBD632BHDS5.
 *         * +Status+ - (<tt>String</tt>) This response element
 *           indicates the current status of the distribution. When the
 *           status is Deployed, the distribution's information is fully
 *           propagated throughout the Amazon CloudFront system.
 *         * +LastModifiedTime+ - (<tt>Date</tt>) The date and
 *           time the distribution was last modified.
 *         * +InProgressInvalidationBatches+ - (*required*,
 *           <tt>Integer</tt>) The number of invalidation batches currently
 *           in progress.
 *         * +DomainName+ - (<tt>String</tt>) The domain name
 *           corresponding to the distribution. For example:
 *           d604721fxaaqy9.cloudfront.net.
 *         * +ActiveTrustedSigners+ - (<tt>Object</tt>)
 *           CloudFront automatically adds this element to the response
 *           only if you've set up the distribution to serve private
 *           content with signed URLs. The element lists the key pair IDs
 *           that CloudFront is aware of for each trusted signer. The
 *           Signer child element lists the AWS account number of the
 *           trusted signer (or an empty Self element if the signer is
 *           you). The Signer element also includes the IDs of any active
 *           key pairs associated with the trusted signer's AWS account. If
 *           no KeyPairId element appears for a Signer, that signer can't
 *           create working signed URLs.
 *           * +Enabled+ - (<tt>Boolean</tt>) Each active
 *             trusted signer.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             unique trusted signers included in all cache behaviors. For
 *             example, if three cache behaviors all list the same three
 *             AWS accounts, the value of Quantity for ActiveTrustedSigners
 *             will be 3.
 *           * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *             contains one Signer complex type for each unique trusted
 *             signer that is specified in the TrustedSigners complex type,
 *             including trusted signers in the default cache behavior and
 *             in all of the other cache behaviors.
 *             * +AwsAccountNumber+ - (<tt>String</tt>) Specifies an AWS
 *               account that can create signed URLs. Values: self, which
 *               indicates that the AWS account that was used to create the
 *               distribution can created signed URLs, or an AWS account
 *               number. Omit the dashes in the account number.
 *             * +KeyPairIds+ - (<tt>Object</tt>) A complex type that lists
 *               the active CloudFront key pairs, if any, that are
 *               associated with AwsAccountNumber.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of active CloudFront key pairs for AwsAccountNumber.
 *               * +Items+ - (<tt>Array<String></tt>) A complex type that
 *                 lists the active CloudFront key pairs, if any, that are
 *                 associated with AwsAccountNumber.
 *         * +DistributionConfig+ - (<tt>Object</tt>) The
 *           current configuration information for the distribution.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             DistributionConfig object), a new distribution is created.
 *             If the CallerReference is a value you already sent in a
 *             previous request to create a distribution, and the content
 *             of the DistributionConfig is identical to the original
 *             request (ignoring white space), the response includes the
 *             same information returned to the original request. If the
 *             CallerReference is a value you already sent in a previous
 *             request to create a distribution but the content of the
 *             DistributionConfig is different from the original request,
 *             CloudFront returns a DistributionAlreadyExists error.
 *           * +Aliases+ - (<tt>Object</tt>) A complex type
 *             that contains information about CNAMEs (alternate domain
 *             names), if any, for this distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               CNAMEs, if any, for this distribution.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains CNAME elements, if any, for this
 *               distribution. If Quantity is 0, you can omit Items.
 *           * +DefaultRootObject+ - (<tt>String</tt>) The
 *             object that you want CloudFront to return (for example,
 *             index.html) when an end user requests the root URL for your
 *             distribution (http://www.example.com) instead of an object
 *             in your distribution (http://www.example.com/index.html).
 *             Specifying a default root object avoids exposing the
 *             contents of your distribution. If you don't want to specify
 *             a default root object when you create a distribution,
 *             include an empty DefaultRootObject element. To delete the
 *             default root object from an existing distribution, update
 *             the distribution configuration and include an empty
 *             DefaultRootObject element. To replace the default root
 *             object, update the distribution configuration and specify
 *             the new object.
 *           * +Origins+ - (<tt>Object</tt>) A complex type
 *             that contains information about origins for this
 *             distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               origins for this distribution.
 *             * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *               contains origins for this distribution.
 *               * +Id+ - (<tt>String</tt>) A unique identifier
 *                 for the origin. The value of Id must be unique within
 *                 the distribution. You use the value of Id when you
 *                 create a cache behavior. The Id identifies the origin
 *                 that CloudFront routes a request to when the request
 *                 matches the path pattern for that cache behavior.
 *               * +DomainName+ - (<tt>String</tt>) Amazon S3
 *                 origins: The DNS name of the Amazon S3 bucket from which
 *                 you want CloudFront to get objects for this origin, for
 *                 example, myawsbucket.s3.amazonaws.com. Custom origins:
 *                 The DNS domain name for the HTTP server from which you
 *                 want CloudFront to get objects for this origin, for
 *                 example, www.example.com.
 *               * +S3OriginConfig+ - (<tt>Object</tt>) A complex type that
 *                 contains information about the Amazon S3 origin. If the
 *                 origin is a custom origin, use the CustomOriginConfig
 *                 element instead.
 *                 * +OriginAccessIdentity+ - (<tt>String</tt>)
 *                   The CloudFront origin access identity to associate
 *                   with the origin. Use an origin access identity to
 *                   configure the origin so that end users can only access
 *                   objects in an Amazon S3 bucket through CloudFront. If
 *                   you want end users to be able to access objects using
 *                   either the CloudFront URL or the Amazon S3 URL,
 *                   specify an empty OriginAccessIdentity element. To
 *                   delete the origin access identity from an existing
 *                   distribution, update the distribution configuration
 *                   and include an empty OriginAccessIdentity element. To
 *                   replace the origin access identity, update the
 *                   distribution configuration and specify the new origin
 *                   access identity.
 *               * +CustomOriginConfig+ - (<tt>Object</tt>) A complex type
 *                 that contains information about a custom origin. If the
 *                 origin is an Amazon S3 bucket, use the S3OriginConfig
 *                 element instead.
 *                 * +HTTPPort+ - (<tt>Integer</tt>) The HTTP
 *                   port the custom origin listens on.
 *                 * +HTTPSPort+ - (<tt>Integer</tt>) The HTTPS
 *                   port the custom origin listens on.
 *                 * +OriginProtocolPolicy+ - (<tt>String</tt>)
 *                   The origin protocol policy to apply to your origin.
 *           * +DefaultCacheBehavior+ - (<tt>Object</tt>) A
 *             complex type that describes the default cache behavior if
 *             you do not specify a CacheBehavior element or if files don't
 *             match any of the values of PathPattern in CacheBehavior
 *             elements.You must create exactly one default cache behavior.
 *             * +TargetOriginId+ - (<tt>String</tt>) The value
 *               of ID for the origin that you want CloudFront to route
 *               requests to when a request matches the path pattern either
 *               for a cache behavior or for the default cache behavior.
 *             * +ForwardedValues+ - (<tt>Object</tt>) A
 *               complex type that specifies how CloudFront handles query
 *               strings.
 *               * +QueryString+ - (<tt>Boolean</tt>) Indicates
 *                 whether you want CloudFront to forward query strings to
 *                 the origin that is associated with this cache behavior.
 *                 If so, specify true; if not, specify false.
 *             * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *               type that specifies the AWS accounts, if any, that you
 *               want to allow to create signed URLs for private content.
 *               If you want to require signed URLs in requests for objects
 *               in the target origin that match the PathPattern for this
 *               cache behavior, specify true for Enabled, and specify the
 *               applicable values for Quantity and Items. For more
 *               information, go to Using a Signed URL to Serve Private
 *               Content in the Amazon CloudFront Developer Guide. If you
 *               don't want to require signed URLs in requests for objects
 *               that match PathPattern, specify false for Enabled and 0
 *               for Quantity. Omit Items. To add, change, or remove one or
 *               more trusted signers, change Enabled to true (if it's
 *               currently false), change Quantity as applicable, and
 *               specify all of the trusted signers that you want to
 *               include in the updated distribution.
 *               * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                 whether you want to require end users to use signed URLs
 *                 to access the files specified by PathPattern and
 *                 TargetOriginId.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of trusted signers for this cache behavior.
 *               * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                 type that contains trusted signers for this cache
 *                 behavior. If Quantity is 0, you can omit Items.
 *             * +ViewerProtocolPolicy+ - (<tt>String</tt>) Use
 *               this element to specify the protocol that users can use to
 *               access the files in the origin specified by TargetOriginId
 *               when a request matches the path pattern in PathPattern. If
 *               you want CloudFront to allow end users to use any
 *               available protocol, specify allow-all. If you want
 *               CloudFront to require HTTPS, specify https.
 *             * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *               amount of time that you want objects to stay in CloudFront
 *               caches before CloudFront queries your origin to see
 *               whether the object has been updated.You can specify a
 *               value from 0 to 3,153,600,000 seconds (100 years).
 *           * +CacheBehaviors+ - (<tt>Object</tt>) A complex
 *             type that contains zero or more CacheBehavior elements.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               cache behaviors for this distribution.
 *             * +Items+ - (<tt>Array<Object></tt>) Optional: A complex
 *               type that contains cache behaviors for this distribution.
 *               If Quantity is 0, you can omit Items.
 *               * +PathPattern+ - (<tt>String</tt>) The
 *                 pattern (for example, images/*.jpg) that specifies which
 *                 requests you want this cache behavior to apply to. When
 *                 CloudFront receives an end-user request, the requested
 *                 path is compared with path patterns in the order in
 *                 which cache behaviors are listed in the distribution.
 *                 The path pattern for the default cache behavior is * and
 *                 cannot be changed. If the request for an object does not
 *                 match the path pattern for any cache behaviors,
 *                 CloudFront applies the behavior in the default cache
 *                 behavior.
 *               * +TargetOriginId+ - (<tt>String</tt>) The
 *                 value of ID for the origin that you want CloudFront to
 *                 route requests to when a request matches the path
 *                 pattern either for a cache behavior or for the default
 *                 cache behavior.
 *               * +ForwardedValues+ - (<tt>Object</tt>) A
 *                 complex type that specifies how CloudFront handles query
 *                 strings.
 *                 * +QueryString+ - (<tt>Boolean</tt>)
 *                   Indicates whether you want CloudFront to forward query
 *                   strings to the origin that is associated with this
 *                   cache behavior. If so, specify true; if not, specify
 *                   false.
 *               * +TrustedSigners+ - (<tt>Object</tt>) A
 *                 complex type that specifies the AWS accounts, if any,
 *                 that you want to allow to create signed URLs for private
 *                 content. If you want to require signed URLs in requests
 *                 for objects in the target origin that match the
 *                 PathPattern for this cache behavior, specify true for
 *                 Enabled, and specify the applicable values for Quantity
 *                 and Items. For more information, go to Using a Signed
 *                 URL to Serve Private Content in the Amazon CloudFront
 *                 Developer Guide. If you don't want to require signed
 *                 URLs in requests for objects that match PathPattern,
 *                 specify false for Enabled and 0 for Quantity. Omit
 *                 Items. To add, change, or remove one or more trusted
 *                 signers, change Enabled to true (if it's currently
 *                 false), change Quantity as applicable, and specify all
 *                 of the trusted signers that you want to include in the
 *                 updated distribution.
 *                 * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                   whether you want to require end users to use signed
 *                   URLs to access the files specified by PathPattern and
 *                   TargetOriginId.
 *                 * +Quantity+ - (<tt>Integer</tt>) The number
 *                   of trusted signers for this cache behavior.
 *                 * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                   type that contains trusted signers for this cache
 *                   behavior. If Quantity is 0, you can omit Items.
 *               * +ViewerProtocolPolicy+ - (<tt>String</tt>)
 *                 Use this element to specify the protocol that users can
 *                 use to access the files in the origin specified by
 *                 TargetOriginId when a request matches the path pattern
 *                 in PathPattern. If you want CloudFront to allow end
 *                 users to use any available protocol, specify allow-all.
 *                 If you want CloudFront to require HTTPS, specify https.
 *               * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *                 amount of time that you want objects to stay in
 *                 CloudFront caches before CloudFront queries your origin
 *                 to see whether the object has been updated.You can
 *                 specify a value from 0 to 3,153,600,000 seconds (100
 *                 years).
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the distribution.
 *           * +Logging+ - (<tt>Object</tt>) A complex type
 *             that controls whether access logs are written for the
 *             distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want CloudFront to save access logs to an
 *               Amazon S3 bucket. If you do not want to enable logging
 *               when you create a distribution or if you want to disable
 *               logging for an existing distribution, specify false for
 *               Enabled, and specify empty Bucket and Prefix elements. If
 *               you specify false for Enabled but you specify values for
 *               Bucket and Prefix, the values are automatically deleted.
 *             * +Bucket+ - (<tt>String</tt>) The Amazon S3
 *               bucket to store the access logs in, for example,
 *               myawslogbucket.s3.amazonaws.com.
 *             * +Prefix+ - (<tt>String</tt>) An optional
 *               string that you want CloudFront to prefix to the access
 *               log filenames for this distribution, for example,
 *               myprefix/. If you want to enable logging, but you do not
 *               want to specify a prefix, you still must include an empty
 *               Prefix element in the Logging element.
 *           * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *             distribution is enabled to accept end user requests for
 *             content.
 *       * +ETag+ - (<tt>String</tt>) The current version of the
 *         distribution's information. For example: E2QWRUHAPOMQZL.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getDistributionConfig(params, callback)
 *   Calls the GetDistributionConfig API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The distribution's id.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DistributionConfig+ - (<tt>Object</tt>) The distribution's
 *         configuration information.
 *         * +CallerReference+ - (<tt>String</tt>) A unique
 *           number that ensures the request can't be replayed. If the
 *           CallerReference is new (no matter the content of the
 *           DistributionConfig object), a new distribution is created. If
 *           the CallerReference is a value you already sent in a previous
 *           request to create a distribution, and the content of the
 *           DistributionConfig is identical to the original request
 *           (ignoring white space), the response includes the same
 *           information returned to the original request. If the
 *           CallerReference is a value you already sent in a previous
 *           request to create a distribution but the content of the
 *           DistributionConfig is different from the original request,
 *           CloudFront returns a DistributionAlreadyExists error.
 *         * +Aliases+ - (<tt>Object</tt>) A complex type that
 *           contains information about CNAMEs (alternate domain names), if
 *           any, for this distribution.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             CNAMEs, if any, for this distribution.
 *           * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *             that contains CNAME elements, if any, for this distribution.
 *             If Quantity is 0, you can omit Items.
 *         * +DefaultRootObject+ - (<tt>String</tt>) The object
 *           that you want CloudFront to return (for example, index.html)
 *           when an end user requests the root URL for your distribution
 *           (http://www.example.com) instead of an object in your
 *           distribution (http://www.example.com/index.html). Specifying a
 *           default root object avoids exposing the contents of your
 *           distribution. If you don't want to specify a default root
 *           object when you create a distribution, include an empty
 *           DefaultRootObject element. To delete the default root object
 *           from an existing distribution, update the distribution
 *           configuration and include an empty DefaultRootObject element.
 *           To replace the default root object, update the distribution
 *           configuration and specify the new object.
 *         * +Origins+ - (<tt>Object</tt>) A complex type that
 *           contains information about origins for this distribution.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             origins for this distribution.
 *           * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *             contains origins for this distribution.
 *             * +Id+ - (<tt>String</tt>) A unique identifier
 *               for the origin. The value of Id must be unique within the
 *               distribution. You use the value of Id when you create a
 *               cache behavior. The Id identifies the origin that
 *               CloudFront routes a request to when the request matches
 *               the path pattern for that cache behavior.
 *             * +DomainName+ - (<tt>String</tt>) Amazon S3
 *               origins: The DNS name of the Amazon S3 bucket from which
 *               you want CloudFront to get objects for this origin, for
 *               example, myawsbucket.s3.amazonaws.com. Custom origins: The
 *               DNS domain name for the HTTP server from which you want
 *               CloudFront to get objects for this origin, for example,
 *               www.example.com.
 *             * +S3OriginConfig+ - (<tt>Object</tt>) A complex type that
 *               contains information about the Amazon S3 origin. If the
 *               origin is a custom origin, use the CustomOriginConfig
 *               element instead.
 *               * +OriginAccessIdentity+ - (<tt>String</tt>)
 *                 The CloudFront origin access identity to associate with
 *                 the origin. Use an origin access identity to configure
 *                 the origin so that end users can only access objects in
 *                 an Amazon S3 bucket through CloudFront. If you want end
 *                 users to be able to access objects using either the
 *                 CloudFront URL or the Amazon S3 URL, specify an empty
 *                 OriginAccessIdentity element. To delete the origin
 *                 access identity from an existing distribution, update
 *                 the distribution configuration and include an empty
 *                 OriginAccessIdentity element. To replace the origin
 *                 access identity, update the distribution configuration
 *                 and specify the new origin access identity.
 *             * +CustomOriginConfig+ - (<tt>Object</tt>) A complex type
 *               that contains information about a custom origin. If the
 *               origin is an Amazon S3 bucket, use the S3OriginConfig
 *               element instead.
 *               * +HTTPPort+ - (<tt>Integer</tt>) The HTTP
 *                 port the custom origin listens on.
 *               * +HTTPSPort+ - (<tt>Integer</tt>) The HTTPS
 *                 port the custom origin listens on.
 *               * +OriginProtocolPolicy+ - (<tt>String</tt>)
 *                 The origin protocol policy to apply to your origin.
 *         * +DefaultCacheBehavior+ - (<tt>Object</tt>) A
 *           complex type that describes the default cache behavior if you
 *           do not specify a CacheBehavior element or if files don't match
 *           any of the values of PathPattern in CacheBehavior elements.You
 *           must create exactly one default cache behavior.
 *           * +TargetOriginId+ - (<tt>String</tt>) The value
 *             of ID for the origin that you want CloudFront to route
 *             requests to when a request matches the path pattern either
 *             for a cache behavior or for the default cache behavior.
 *           * +ForwardedValues+ - (<tt>Object</tt>) A complex
 *             type that specifies how CloudFront handles query strings.
 *             * +QueryString+ - (<tt>Boolean</tt>) Indicates
 *               whether you want CloudFront to forward query strings to
 *               the origin that is associated with this cache behavior. If
 *               so, specify true; if not, specify false.
 *           * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *             type that specifies the AWS accounts, if any, that you want
 *             to allow to create signed URLs for private content. If you
 *             want to require signed URLs in requests for objects in the
 *             target origin that match the PathPattern for this cache
 *             behavior, specify true for Enabled, and specify the
 *             applicable values for Quantity and Items. For more
 *             information, go to Using a Signed URL to Serve Private
 *             Content in the Amazon CloudFront Developer Guide. If you
 *             don't want to require signed URLs in requests for objects
 *             that match PathPattern, specify false for Enabled and 0 for
 *             Quantity. Omit Items. To add, change, or remove one or more
 *             trusted signers, change Enabled to true (if it's currently
 *             false), change Quantity as applicable, and specify all of
 *             the trusted signers that you want to include in the updated
 *             distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want to require end users to use signed URLs
 *               to access the files specified by PathPattern and
 *               TargetOriginId.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               trusted signers for this cache behavior.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains trusted signers for this cache
 *               behavior. If Quantity is 0, you can omit Items.
 *           * +ViewerProtocolPolicy+ - (<tt>String</tt>) Use
 *             this element to specify the protocol that users can use to
 *             access the files in the origin specified by TargetOriginId
 *             when a request matches the path pattern in PathPattern. If
 *             you want CloudFront to allow end users to use any available
 *             protocol, specify allow-all. If you want CloudFront to
 *             require HTTPS, specify https.
 *           * +MinTTL+ - (<tt>Integer</tt>) The minimum amount
 *             of time that you want objects to stay in CloudFront caches
 *             before CloudFront queries your origin to see whether the
 *             object has been updated.You can specify a value from 0 to
 *             3,153,600,000 seconds (100 years).
 *         * +CacheBehaviors+ - (<tt>Object</tt>) A complex
 *           type that contains zero or more CacheBehavior elements.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             cache behaviors for this distribution.
 *           * +Items+ - (<tt>Array<Object></tt>) Optional: A complex type
 *             that contains cache behaviors for this distribution. If
 *             Quantity is 0, you can omit Items.
 *             * +PathPattern+ - (<tt>String</tt>) The pattern
 *               (for example, images/*.jpg) that specifies which requests
 *               you want this cache behavior to apply to. When CloudFront
 *               receives an end-user request, the requested path is
 *               compared with path patterns in the order in which cache
 *               behaviors are listed in the distribution. The path pattern
 *               for the default cache behavior is * and cannot be changed.
 *               If the request for an object does not match the path
 *               pattern for any cache behaviors, CloudFront applies the
 *               behavior in the default cache behavior.
 *             * +TargetOriginId+ - (<tt>String</tt>) The value
 *               of ID for the origin that you want CloudFront to route
 *               requests to when a request matches the path pattern either
 *               for a cache behavior or for the default cache behavior.
 *             * +ForwardedValues+ - (<tt>Object</tt>) A
 *               complex type that specifies how CloudFront handles query
 *               strings.
 *               * +QueryString+ - (<tt>Boolean</tt>) Indicates
 *                 whether you want CloudFront to forward query strings to
 *                 the origin that is associated with this cache behavior.
 *                 If so, specify true; if not, specify false.
 *             * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *               type that specifies the AWS accounts, if any, that you
 *               want to allow to create signed URLs for private content.
 *               If you want to require signed URLs in requests for objects
 *               in the target origin that match the PathPattern for this
 *               cache behavior, specify true for Enabled, and specify the
 *               applicable values for Quantity and Items. For more
 *               information, go to Using a Signed URL to Serve Private
 *               Content in the Amazon CloudFront Developer Guide. If you
 *               don't want to require signed URLs in requests for objects
 *               that match PathPattern, specify false for Enabled and 0
 *               for Quantity. Omit Items. To add, change, or remove one or
 *               more trusted signers, change Enabled to true (if it's
 *               currently false), change Quantity as applicable, and
 *               specify all of the trusted signers that you want to
 *               include in the updated distribution.
 *               * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                 whether you want to require end users to use signed URLs
 *                 to access the files specified by PathPattern and
 *                 TargetOriginId.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of trusted signers for this cache behavior.
 *               * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                 type that contains trusted signers for this cache
 *                 behavior. If Quantity is 0, you can omit Items.
 *             * +ViewerProtocolPolicy+ - (<tt>String</tt>) Use
 *               this element to specify the protocol that users can use to
 *               access the files in the origin specified by TargetOriginId
 *               when a request matches the path pattern in PathPattern. If
 *               you want CloudFront to allow end users to use any
 *               available protocol, specify allow-all. If you want
 *               CloudFront to require HTTPS, specify https.
 *             * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *               amount of time that you want objects to stay in CloudFront
 *               caches before CloudFront queries your origin to see
 *               whether the object has been updated.You can specify a
 *               value from 0 to 3,153,600,000 seconds (100 years).
 *         * +Comment+ - (<tt>String</tt>) Any comments you
 *           want to include about the distribution.
 *         * +Logging+ - (<tt>Object</tt>) A complex type that
 *           controls whether access logs are written for the distribution.
 *           * +Enabled+ - (<tt>Boolean</tt>) Specifies whether
 *             you want CloudFront to save access logs to an Amazon S3
 *             bucket. If you do not want to enable logging when you create
 *             a distribution or if you want to disable logging for an
 *             existing distribution, specify false for Enabled, and
 *             specify empty Bucket and Prefix elements. If you specify
 *             false for Enabled but you specify values for Bucket and
 *             Prefix, the values are automatically deleted.
 *           * +Bucket+ - (<tt>String</tt>) The Amazon S3
 *             bucket to store the access logs in, for example,
 *             myawslogbucket.s3.amazonaws.com.
 *           * +Prefix+ - (<tt>String</tt>) An optional string
 *             that you want CloudFront to prefix to the access log
 *             filenames for this distribution, for example, myprefix/. If
 *             you want to enable logging, but you do not want to specify a
 *             prefix, you still must include an empty Prefix element in
 *             the Logging element.
 *         * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *           distribution is enabled to accept end user requests for
 *           content.
 *       * +ETag+ - (<tt>String</tt>) The current version of the
 *         configuration. For example: E2QWRUHAPOMQZL.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getInvalidation(params, callback)
 *   Calls the GetInvalidation API operation.
 *   @param params [Object]
 *     * +DistributionId+ - (*required*, <tt>String</tt>) The
 *       distribution's id.
 *     * +Id+ - (*required*, <tt>String</tt>) The invalidation's id.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Invalidation+ - (<tt>Object</tt>) The invalidation's
 *         information.
 *         * +Id+ - (<tt>String</tt>) The identifier for the
 *           invalidation request. For example: IDFDVBD632BHDS5.
 *         * +Status+ - (<tt>String</tt>) The status of the
 *           invalidation request. When the invalidation batch is finished,
 *           the status is Completed.
 *         * +CreateTime+ - (<tt>Date</tt>) The date and time
 *           the invalidation request was first made.
 *         * +InvalidationBatch+ - (<tt>Object</tt>) The
 *           current invalidation information for the batch request.
 *           * +Paths+ - (<tt>Object</tt>) The path of the
 *             object to invalidate. The path is relative to the
 *             distribution and must begin with a slash (/). You must
 *             enclose each invalidation object with the Path element tags.
 *             If the path includes non-ASCII characters or unsafe
 *             characters as defined in RFC 1783
 *             (http://www.ietf.org/rfc/rfc1738.txt), URL encode those
 *             characters. Do not URL encode any other characters in the
 *             path, or CloudFront will not invalidate the old version of
 *             the updated object.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               objects that you want to invalidate.
 *             * +Items+ - (<tt>Array<String></tt>) A complex type that
 *               contains a list of the objects that you want to
 *               invalidate.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             name that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the Path
 *             object), a new distribution is created. If the
 *             CallerReference is a value you already sent in a previous
 *             request to create an invalidation batch, and the content of
 *             each Path element is identical to the original request, the
 *             response includes the same information returned to the
 *             original request. If the CallerReference is a value you
 *             already sent in a previous request to create a distribution
 *             but the content of any Path is different from the original
 *             request, CloudFront returns an
 *             InvalidationBatchAlreadyExists error.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getStreamingDistribution(params, callback)
 *   Calls the GetStreamingDistribution API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The streaming distribution's id.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StreamingDistribution+ - (<tt>Object</tt>) The streaming
 *         distribution's information.
 *         * +Id+ - (<tt>String</tt>) The identifier for the
 *           streaming distribution. For example: EGTXBD79H29TRA8.
 *         * +Status+ - (<tt>String</tt>) The current status of
 *           the streaming distribution. When the status is Deployed, the
 *           distribution's information is fully propagated throughout the
 *           Amazon CloudFront system.
 *         * +LastModifiedTime+ - (<tt>Date</tt>) The date and time the
 *           distribution was last modified.
 *         * +DomainName+ - (<tt>String</tt>) The domain name
 *           corresponding to the streaming distribution. For example:
 *           s5c39gqb8ow64r.cloudfront.net.
 *         * +ActiveTrustedSigners+ - (<tt>Object</tt>)
 *           CloudFront automatically adds this element to the response
 *           only if you've set up the distribution to serve private
 *           content with signed URLs. The element lists the key pair IDs
 *           that CloudFront is aware of for each trusted signer. The
 *           Signer child element lists the AWS account number of the
 *           trusted signer (or an empty Self element if the signer is
 *           you). The Signer element also includes the IDs of any active
 *           key pairs associated with the trusted signer's AWS account. If
 *           no KeyPairId element appears for a Signer, that signer can't
 *           create working signed URLs.
 *           * +Enabled+ - (<tt>Boolean</tt>) Each active
 *             trusted signer.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             unique trusted signers included in all cache behaviors. For
 *             example, if three cache behaviors all list the same three
 *             AWS accounts, the value of Quantity for ActiveTrustedSigners
 *             will be 3.
 *           * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *             contains one Signer complex type for each unique trusted
 *             signer that is specified in the TrustedSigners complex type,
 *             including trusted signers in the default cache behavior and
 *             in all of the other cache behaviors.
 *             * +AwsAccountNumber+ - (<tt>String</tt>) Specifies an AWS
 *               account that can create signed URLs. Values: self, which
 *               indicates that the AWS account that was used to create the
 *               distribution can created signed URLs, or an AWS account
 *               number. Omit the dashes in the account number.
 *             * +KeyPairIds+ - (<tt>Object</tt>) A complex type that lists
 *               the active CloudFront key pairs, if any, that are
 *               associated with AwsAccountNumber.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of active CloudFront key pairs for AwsAccountNumber.
 *               * +Items+ - (<tt>Array<String></tt>) A complex type that
 *                 lists the active CloudFront key pairs, if any, that are
 *                 associated with AwsAccountNumber.
 *         * +StreamingDistributionConfig+ - (<tt>Object</tt>)
 *           The current configuration information for the streaming
 *           distribution.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             StreamingDistributionConfig object), a new streaming
 *             distribution is created. If the CallerReference is a value
 *             you already sent in a previous request to create a streaming
 *             distribution, and the content of the
 *             StreamingDistributionConfig is identical to the original
 *             request (ignoring white space), the response includes the
 *             same information returned to the original request. If the
 *             CallerReference is a value you already sent in a previous
 *             request to create a streaming distribution but the content
 *             of the StreamingDistributionConfig is different from the
 *             original request, CloudFront returns a
 *             DistributionAlreadyExists error.
 *           * +S3Origin+ - (<tt>Object</tt>) A complex type
 *             that contains information about the Amazon S3 bucket from
 *             which you want CloudFront to get your media files for
 *             distribution.
 *             * +DomainName+ - (<tt>String</tt>) The DNS name
 *               of the S3 origin.
 *             * +OriginAccessIdentity+ - (<tt>String</tt>)
 *               Your S3 origin's origin access identity.
 *           * +Aliases+ - (<tt>Object</tt>) A complex type
 *             that contains information about CNAMEs (alternate domain
 *             names), if any, for this streaming distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               CNAMEs, if any, for this distribution.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains CNAME elements, if any, for this
 *               distribution. If Quantity is 0, you can omit Items.
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the streaming distribution.
 *           * +Logging+ - (<tt>Object</tt>) A complex type
 *             that controls whether access logs are written for the
 *             streaming distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want CloudFront to save access logs to an
 *               Amazon S3 bucket. If you do not want to enable logging
 *               when you create a distribution or if you want to disable
 *               logging for an existing distribution, specify false for
 *               Enabled, and specify empty Bucket and Prefix elements. If
 *               you specify false for Enabled but you specify values for
 *               Bucket and Prefix, the values are automatically deleted.
 *             * +Bucket+ - (<tt>String</tt>) The Amazon S3
 *               bucket to store the access logs in, for example,
 *               myawslogbucket.s3.amazonaws.com.
 *             * +Prefix+ - (<tt>String</tt>) An optional
 *               string that you want CloudFront to prefix to the access
 *               log filenames for this distribution, for example,
 *               myprefix/. If you want to enable logging, but you do not
 *               want to specify a prefix, you still must include an empty
 *               Prefix element in the Logging element.
 *           * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *             type that specifies the AWS accounts, if any, that you want
 *             to allow to create signed URLs for private content. If you
 *             want to require signed URLs in requests for objects in the
 *             target origin that match the PathPattern for this cache
 *             behavior, specify true for Enabled, and specify the
 *             applicable values for Quantity and Items. For more
 *             information, go to Using a Signed URL to Serve Private
 *             Content in the Amazon CloudFront Developer Guide. If you
 *             don't want to require signed URLs in requests for objects
 *             that match PathPattern, specify false for Enabled and 0 for
 *             Quantity. Omit Items. To add, change, or remove one or more
 *             trusted signers, change Enabled to true (if it's currently
 *             false), change Quantity as applicable, and specify all of
 *             the trusted signers that you want to include in the updated
 *             distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want to require end users to use signed URLs
 *               to access the files specified by PathPattern and
 *               TargetOriginId.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               trusted signers for this cache behavior.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains trusted signers for this cache
 *               behavior. If Quantity is 0, you can omit Items.
 *           * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *             streaming distribution is enabled to accept end user
 *             requests for content.
 *       * +ETag+ - (<tt>String</tt>) The current version of the streaming
 *         distribution's information. For example: E2QWRUHAPOMQZL.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method getStreamingDistributionConfig(params, callback)
 *   Calls the GetStreamingDistributionConfig API operation.
 *   @param params [Object]
 *     * +Id+ - (<tt>String</tt>) The streaming distribution's id.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StreamingDistributionConfig+ - (<tt>Object</tt>) The streaming
 *         distribution's configuration information.
 *         * +CallerReference+ - (<tt>String</tt>) A unique
 *           number that ensures the request can't be replayed. If the
 *           CallerReference is new (no matter the content of the
 *           StreamingDistributionConfig object), a new streaming
 *           distribution is created. If the CallerReference is a value you
 *           already sent in a previous request to create a streaming
 *           distribution, and the content of the
 *           StreamingDistributionConfig is identical to the original
 *           request (ignoring white space), the response includes the same
 *           information returned to the original request. If the
 *           CallerReference is a value you already sent in a previous
 *           request to create a streaming distribution but the content of
 *           the StreamingDistributionConfig is different from the original
 *           request, CloudFront returns a DistributionAlreadyExists error.
 *         * +S3Origin+ - (<tt>Object</tt>) A complex type that
 *           contains information about the Amazon S3 bucket from which you
 *           want CloudFront to get your media files for distribution.
 *           * +DomainName+ - (<tt>String</tt>) The DNS name of
 *             the S3 origin.
 *           * +OriginAccessIdentity+ - (<tt>String</tt>) Your
 *             S3 origin's origin access identity.
 *         * +Aliases+ - (<tt>Object</tt>) A complex type that
 *           contains information about CNAMEs (alternate domain names), if
 *           any, for this streaming distribution.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             CNAMEs, if any, for this distribution.
 *           * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *             that contains CNAME elements, if any, for this distribution.
 *             If Quantity is 0, you can omit Items.
 *         * +Comment+ - (<tt>String</tt>) Any comments you
 *           want to include about the streaming distribution.
 *         * +Logging+ - (<tt>Object</tt>) A complex type that
 *           controls whether access logs are written for the streaming
 *           distribution.
 *           * +Enabled+ - (<tt>Boolean</tt>) Specifies whether
 *             you want CloudFront to save access logs to an Amazon S3
 *             bucket. If you do not want to enable logging when you create
 *             a distribution or if you want to disable logging for an
 *             existing distribution, specify false for Enabled, and
 *             specify empty Bucket and Prefix elements. If you specify
 *             false for Enabled but you specify values for Bucket and
 *             Prefix, the values are automatically deleted.
 *           * +Bucket+ - (<tt>String</tt>) The Amazon S3
 *             bucket to store the access logs in, for example,
 *             myawslogbucket.s3.amazonaws.com.
 *           * +Prefix+ - (<tt>String</tt>) An optional string
 *             that you want CloudFront to prefix to the access log
 *             filenames for this distribution, for example, myprefix/. If
 *             you want to enable logging, but you do not want to specify a
 *             prefix, you still must include an empty Prefix element in
 *             the Logging element.
 *         * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *           type that specifies the AWS accounts, if any, that you want to
 *           allow to create signed URLs for private content. If you want
 *           to require signed URLs in requests for objects in the target
 *           origin that match the PathPattern for this cache behavior,
 *           specify true for Enabled, and specify the applicable values
 *           for Quantity and Items. For more information, go to Using a
 *           Signed URL to Serve Private Content in the Amazon CloudFront
 *           Developer Guide. If you don't want to require signed URLs in
 *           requests for objects that match PathPattern, specify false for
 *           Enabled and 0 for Quantity. Omit Items. To add, change, or
 *           remove one or more trusted signers, change Enabled to true (if
 *           it's currently false), change Quantity as applicable, and
 *           specify all of the trusted signers that you want to include in
 *           the updated distribution.
 *           * +Enabled+ - (<tt>Boolean</tt>) Specifies whether
 *             you want to require end users to use signed URLs to access
 *             the files specified by PathPattern and TargetOriginId.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             trusted signers for this cache behavior.
 *           * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *             that contains trusted signers for this cache behavior. If
 *             Quantity is 0, you can omit Items.
 *         * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *           streaming distribution is enabled to accept end user requests
 *           for content.
 *       * +ETag+ - (<tt>String</tt>) The current version of the
 *         configuration. For example: E2QWRUHAPOMQZL.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listCloudFrontOriginAccessIdentities(params, callback)
 *   Calls the ListCloudFrontOriginAccessIdentities API operation.
 *   @param params [Object]
 *     * +Marker+ - (<tt>String</tt>) Use this when paginating results to
 *       indicate where to begin in your list of origin access
 *       identities. The results include identities in the list that
 *       occur after the marker. To get the next page of results, set the
 *       Marker to the value of the NextMarker from the current page's
 *       response (which is also the ID of the last identity on that
 *       page).
 *     * +MaxItems+ - (<tt>String</tt>) The maximum number of origin
 *       access identities you want in the response body.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CloudFrontOriginAccessIdentityList+ - (<tt>Object</tt>) The
 *         CloudFrontOriginAccessIdentityList type.
 *         * +Marker+ - (<tt>String</tt>) The value you
 *           provided for the Marker request parameter.
 *         * +NextMarker+ - (<tt>String</tt>) If IsTruncated is true, this
 *           element is present and contains the value you can use for the
 *           Marker request parameter to continue listing your origin
 *           access identities where they left off.
 *         * +MaxItems+ - (<tt>Integer</tt>) The value you
 *           provided for the MaxItems request parameter.
 *         * +IsTruncated+ - (<tt>Boolean</tt>) A flag that
 *           indicates whether more origin access identities remain to be
 *           listed. If your results were truncated, you can make a
 *           follow-up pagination request using the Marker request
 *           parameter to retrieve more items in the list.
 *         * +Quantity+ - (<tt>Integer</tt>) The number of
 *           CloudFront origin access identities that were created by the
 *           current AWS account.
 *         * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *           contains one CloudFrontOriginAccessIdentitySummary element for
 *           each origin access identity that was created by the current
 *           AWS account.
 *           * +Id+ - (<tt>String</tt>) The ID for the origin
 *             access identity. For example: E74FTE3AJFJ256A.
 *           * +S3CanonicalUserId+ - (<tt>String</tt>) The
 *             Amazon S3 canonical user ID for the origin access identity,
 *             which you use when giving the origin access identity read
 *             permission to an object in Amazon S3.
 *           * +Comment+ - (<tt>String</tt>) The comment for
 *             this origin access identity, as originally specified when
 *             created.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listDistributions(params, callback)
 *   Calls the ListDistributions API operation.
 *   @param params [Object]
 *     * +Marker+ - (<tt>String</tt>) Use this when paginating results to
 *       indicate where to begin in your list of distributions. The
 *       results include distributions in the list that occur after the
 *       marker. To get the next page of results, set the Marker to the
 *       value of the NextMarker from the current page's response (which
 *       is also the ID of the last distribution on that page).
 *     * +MaxItems+ - (<tt>String</tt>) The maximum number of
 *       distributions you want in the response body.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +DistributionList+ - (<tt>Object</tt>) The DistributionList
 *         type.
 *         * +Marker+ - (<tt>String</tt>) The value you
 *           provided for the Marker request parameter.
 *         * +NextMarker+ - (<tt>String</tt>) If IsTruncated is true, this
 *           element is present and contains the value you can use for the
 *           Marker request parameter to continue listing your
 *           distributions where they left off.
 *         * +MaxItems+ - (<tt>Integer</tt>) The value you
 *           provided for the MaxItems request parameter.
 *         * +IsTruncated+ - (<tt>Boolean</tt>) A flag that
 *           indicates whether more distributions remain to be listed. If
 *           your results were truncated, you can make a follow-up
 *           pagination request using the Marker request parameter to
 *           retrieve more distributions in the list.
 *         * +Quantity+ - (<tt>Integer</tt>) The number of
 *           distributions that were created by the current AWS account.
 *         * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *           contains one DistributionSummary element for each distribution
 *           that was created by the current AWS account.
 *           * +Id+ - (<tt>String</tt>) The identifier for the
 *             distribution. For example: EDFDVBD632BHDS5.
 *           * +Status+ - (<tt>String</tt>) This response
 *             element indicates the current status of the distribution.
 *             When the status is Deployed, the distribution's information
 *             is fully propagated throughout the Amazon CloudFront system.
 *           * +LastModifiedTime+ - (<tt>Date</tt>) The date
 *             and time the distribution was last modified.
 *           * +DomainName+ - (<tt>String</tt>) The domain name
 *             corresponding to the distribution. For example:
 *             d604721fxaaqy9.cloudfront.net.
 *           * +Aliases+ - (<tt>Object</tt>) A complex type
 *             that contains information about CNAMEs (alternate domain
 *             names), if any, for this distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               CNAMEs, if any, for this distribution.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains CNAME elements, if any, for this
 *               distribution. If Quantity is 0, you can omit Items.
 *           * +Origins+ - (<tt>Object</tt>) A complex type
 *             that contains information about origins for this
 *             distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               origins for this distribution.
 *             * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *               contains origins for this distribution.
 *               * +Id+ - (<tt>String</tt>) A unique identifier
 *                 for the origin. The value of Id must be unique within
 *                 the distribution. You use the value of Id when you
 *                 create a cache behavior. The Id identifies the origin
 *                 that CloudFront routes a request to when the request
 *                 matches the path pattern for that cache behavior.
 *               * +DomainName+ - (<tt>String</tt>) Amazon S3
 *                 origins: The DNS name of the Amazon S3 bucket from which
 *                 you want CloudFront to get objects for this origin, for
 *                 example, myawsbucket.s3.amazonaws.com. Custom origins:
 *                 The DNS domain name for the HTTP server from which you
 *                 want CloudFront to get objects for this origin, for
 *                 example, www.example.com.
 *               * +S3OriginConfig+ - (<tt>Object</tt>) A complex type that
 *                 contains information about the Amazon S3 origin. If the
 *                 origin is a custom origin, use the CustomOriginConfig
 *                 element instead.
 *                 * +OriginAccessIdentity+ - (<tt>String</tt>)
 *                   The CloudFront origin access identity to associate
 *                   with the origin. Use an origin access identity to
 *                   configure the origin so that end users can only access
 *                   objects in an Amazon S3 bucket through CloudFront. If
 *                   you want end users to be able to access objects using
 *                   either the CloudFront URL or the Amazon S3 URL,
 *                   specify an empty OriginAccessIdentity element. To
 *                   delete the origin access identity from an existing
 *                   distribution, update the distribution configuration
 *                   and include an empty OriginAccessIdentity element. To
 *                   replace the origin access identity, update the
 *                   distribution configuration and specify the new origin
 *                   access identity.
 *               * +CustomOriginConfig+ - (<tt>Object</tt>) A complex type
 *                 that contains information about a custom origin. If the
 *                 origin is an Amazon S3 bucket, use the S3OriginConfig
 *                 element instead.
 *                 * +HTTPPort+ - (<tt>Integer</tt>) The HTTP
 *                   port the custom origin listens on.
 *                 * +HTTPSPort+ - (<tt>Integer</tt>) The HTTPS
 *                   port the custom origin listens on.
 *                 * +OriginProtocolPolicy+ - (<tt>String</tt>)
 *                   The origin protocol policy to apply to your origin.
 *           * +DefaultCacheBehavior+ - (<tt>Object</tt>) A
 *             complex type that describes the default cache behavior if
 *             you do not specify a CacheBehavior element or if files don't
 *             match any of the values of PathPattern in CacheBehavior
 *             elements.You must create exactly one default cache behavior.
 *             * +TargetOriginId+ - (<tt>String</tt>) The value
 *               of ID for the origin that you want CloudFront to route
 *               requests to when a request matches the path pattern either
 *               for a cache behavior or for the default cache behavior.
 *             * +ForwardedValues+ - (<tt>Object</tt>) A
 *               complex type that specifies how CloudFront handles query
 *               strings.
 *               * +QueryString+ - (<tt>Boolean</tt>) Indicates
 *                 whether you want CloudFront to forward query strings to
 *                 the origin that is associated with this cache behavior.
 *                 If so, specify true; if not, specify false.
 *             * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *               type that specifies the AWS accounts, if any, that you
 *               want to allow to create signed URLs for private content.
 *               If you want to require signed URLs in requests for objects
 *               in the target origin that match the PathPattern for this
 *               cache behavior, specify true for Enabled, and specify the
 *               applicable values for Quantity and Items. For more
 *               information, go to Using a Signed URL to Serve Private
 *               Content in the Amazon CloudFront Developer Guide. If you
 *               don't want to require signed URLs in requests for objects
 *               that match PathPattern, specify false for Enabled and 0
 *               for Quantity. Omit Items. To add, change, or remove one or
 *               more trusted signers, change Enabled to true (if it's
 *               currently false), change Quantity as applicable, and
 *               specify all of the trusted signers that you want to
 *               include in the updated distribution.
 *               * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                 whether you want to require end users to use signed URLs
 *                 to access the files specified by PathPattern and
 *                 TargetOriginId.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of trusted signers for this cache behavior.
 *               * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                 type that contains trusted signers for this cache
 *                 behavior. If Quantity is 0, you can omit Items.
 *             * +ViewerProtocolPolicy+ - (<tt>String</tt>) Use
 *               this element to specify the protocol that users can use to
 *               access the files in the origin specified by TargetOriginId
 *               when a request matches the path pattern in PathPattern. If
 *               you want CloudFront to allow end users to use any
 *               available protocol, specify allow-all. If you want
 *               CloudFront to require HTTPS, specify https.
 *             * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *               amount of time that you want objects to stay in CloudFront
 *               caches before CloudFront queries your origin to see
 *               whether the object has been updated.You can specify a
 *               value from 0 to 3,153,600,000 seconds (100 years).
 *           * +CacheBehaviors+ - (<tt>Object</tt>) A complex
 *             type that contains zero or more CacheBehavior elements.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               cache behaviors for this distribution.
 *             * +Items+ - (<tt>Array<Object></tt>) Optional: A complex
 *               type that contains cache behaviors for this distribution.
 *               If Quantity is 0, you can omit Items.
 *               * +PathPattern+ - (<tt>String</tt>) The
 *                 pattern (for example, images/*.jpg) that specifies which
 *                 requests you want this cache behavior to apply to. When
 *                 CloudFront receives an end-user request, the requested
 *                 path is compared with path patterns in the order in
 *                 which cache behaviors are listed in the distribution.
 *                 The path pattern for the default cache behavior is * and
 *                 cannot be changed. If the request for an object does not
 *                 match the path pattern for any cache behaviors,
 *                 CloudFront applies the behavior in the default cache
 *                 behavior.
 *               * +TargetOriginId+ - (<tt>String</tt>) The
 *                 value of ID for the origin that you want CloudFront to
 *                 route requests to when a request matches the path
 *                 pattern either for a cache behavior or for the default
 *                 cache behavior.
 *               * +ForwardedValues+ - (<tt>Object</tt>) A
 *                 complex type that specifies how CloudFront handles query
 *                 strings.
 *                 * +QueryString+ - (<tt>Boolean</tt>)
 *                   Indicates whether you want CloudFront to forward query
 *                   strings to the origin that is associated with this
 *                   cache behavior. If so, specify true; if not, specify
 *                   false.
 *               * +TrustedSigners+ - (<tt>Object</tt>) A
 *                 complex type that specifies the AWS accounts, if any,
 *                 that you want to allow to create signed URLs for private
 *                 content. If you want to require signed URLs in requests
 *                 for objects in the target origin that match the
 *                 PathPattern for this cache behavior, specify true for
 *                 Enabled, and specify the applicable values for Quantity
 *                 and Items. For more information, go to Using a Signed
 *                 URL to Serve Private Content in the Amazon CloudFront
 *                 Developer Guide. If you don't want to require signed
 *                 URLs in requests for objects that match PathPattern,
 *                 specify false for Enabled and 0 for Quantity. Omit
 *                 Items. To add, change, or remove one or more trusted
 *                 signers, change Enabled to true (if it's currently
 *                 false), change Quantity as applicable, and specify all
 *                 of the trusted signers that you want to include in the
 *                 updated distribution.
 *                 * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                   whether you want to require end users to use signed
 *                   URLs to access the files specified by PathPattern and
 *                   TargetOriginId.
 *                 * +Quantity+ - (<tt>Integer</tt>) The number
 *                   of trusted signers for this cache behavior.
 *                 * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                   type that contains trusted signers for this cache
 *                   behavior. If Quantity is 0, you can omit Items.
 *               * +ViewerProtocolPolicy+ - (<tt>String</tt>)
 *                 Use this element to specify the protocol that users can
 *                 use to access the files in the origin specified by
 *                 TargetOriginId when a request matches the path pattern
 *                 in PathPattern. If you want CloudFront to allow end
 *                 users to use any available protocol, specify allow-all.
 *                 If you want CloudFront to require HTTPS, specify https.
 *               * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *                 amount of time that you want objects to stay in
 *                 CloudFront caches before CloudFront queries your origin
 *                 to see whether the object has been updated.You can
 *                 specify a value from 0 to 3,153,600,000 seconds (100
 *                 years).
 *           * +Comment+ - (<tt>String</tt>) The comment
 *             originally specified when this distribution was created.
 *           * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *             distribution is enabled to accept end user requests for
 *             content.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listInvalidations(params, callback)
 *   Calls the ListInvalidations API operation.
 *   @param params [Object]
 *     * +DistributionId+ - (*required*, <tt>String</tt>) The
 *       distribution's id.
 *     * +Marker+ - (<tt>String</tt>) Use this parameter when paginating
 *       results to indicate where to begin in your list of invalidation
 *       batches. Because the results are returned in decreasing order
 *       from most recent to oldest, the most recent results are on the
 *       first page, the second page will contain earlier results, and so
 *       on. To get the next page of results, set the Marker to the value
 *       of the NextMarker from the current page's response. This value
 *       is the same as the ID of the last invalidation batch on that
 *       page.
 *     * +MaxItems+ - (<tt>String</tt>) The maximum number of
 *       invalidation batches you want in the response body.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +InvalidationList+ - (<tt>Object</tt>) Information about
 *         invalidation batches.
 *         * +Marker+ - (<tt>String</tt>) The value you
 *           provided for the Marker request parameter.
 *         * +NextMarker+ - (<tt>String</tt>) If IsTruncated is true, this
 *           element is present and contains the value you can use for the
 *           Marker request parameter to continue listing your invalidation
 *           batches where they left off.
 *         * +MaxItems+ - (<tt>Integer</tt>) The value you
 *           provided for the MaxItems request parameter.
 *         * +IsTruncated+ - (<tt>Boolean</tt>) A flag that
 *           indicates whether more invalidation batch requests remain to
 *           be listed. If your results were truncated, you can make a
 *           follow-up pagination request using the Marker request
 *           parameter to retrieve more invalidation batches in the list.
 *         * +Quantity+ - (<tt>Integer</tt>) The number of
 *           invalidation batches that were created by the current AWS
 *           account.
 *         * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *           contains one InvalidationSummary element for each invalidation
 *           batch that was created by the current AWS account.
 *           * +Id+ - (<tt>String</tt>) The unique ID for an
 *             invalidation request.
 *           * +Status+ - (<tt>String</tt>) The status of an
 *             invalidation request.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method listStreamingDistributions(params, callback)
 *   Calls the ListStreamingDistributions API operation.
 *   @param params [Object]
 *     * +Marker+ - (<tt>String</tt>) Use this when paginating results to
 *       indicate where to begin in your list of streaming distributions.
 *       The results include distributions in the list that occur after
 *       the marker. To get the next page of results, set the Marker to
 *       the value of the NextMarker from the current page's response
 *       (which is also the ID of the last distribution on that page).
 *     * +MaxItems+ - (<tt>String</tt>) The maximum number of streaming
 *       distributions you want in the response body.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StreamingDistributionList+ - (<tt>Object</tt>) The
 *         StreamingDistributionList type.
 *         * +Marker+ - (<tt>String</tt>) The value you
 *           provided for the Marker request parameter.
 *         * +NextMarker+ - (<tt>String</tt>) If IsTruncated is true, this
 *           element is present and contains the value you can use for the
 *           Marker request parameter to continue listing your streaming
 *           distributions where they left off.
 *         * +MaxItems+ - (<tt>Integer</tt>) The value you
 *           provided for the MaxItems request parameter.
 *         * +IsTruncated+ - (<tt>Boolean</tt>) A flag that
 *           indicates whether more streaming distributions remain to be
 *           listed. If your results were truncated, you can make a
 *           follow-up pagination request using the Marker request
 *           parameter to retrieve more distributions in the list.
 *         * +Quantity+ - (<tt>Integer</tt>) The number of
 *           streaming distributions that were created by the current AWS
 *           account.
 *         * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *           contains one StreamingDistributionSummary element for each
 *           distribution that was created by the current AWS account.
 *           * +Id+ - (<tt>String</tt>) The identifier for the
 *             distribution. For example: EDFDVBD632BHDS5.
 *           * +Status+ - (<tt>String</tt>) Indicates the
 *             current status of the distribution. When the status is
 *             Deployed, the distribution's information is fully propagated
 *             throughout the Amazon CloudFront system.
 *           * +LastModifiedTime+ - (<tt>Date</tt>) The date
 *             and time the distribution was last modified.
 *           * +DomainName+ - (<tt>String</tt>) The domain name
 *             corresponding to the distribution. For example:
 *             d604721fxaaqy9.cloudfront.net.
 *           * +S3Origin+ - (<tt>Object</tt>) A complex type
 *             that contains information about the Amazon S3 bucket from
 *             which you want CloudFront to get your media files for
 *             distribution.
 *             * +DomainName+ - (<tt>String</tt>) The DNS name
 *               of the S3 origin.
 *             * +OriginAccessIdentity+ - (<tt>String</tt>)
 *               Your S3 origin's origin access identity.
 *           * +Aliases+ - (<tt>Object</tt>) A complex type
 *             that contains information about CNAMEs (alternate domain
 *             names), if any, for this streaming distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               CNAMEs, if any, for this distribution.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains CNAME elements, if any, for this
 *               distribution. If Quantity is 0, you can omit Items.
 *           * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *             type that specifies the AWS accounts, if any, that you want
 *             to allow to create signed URLs for private content. If you
 *             want to require signed URLs in requests for objects in the
 *             target origin that match the PathPattern for this cache
 *             behavior, specify true for Enabled, and specify the
 *             applicable values for Quantity and Items. For more
 *             information, go to Using a Signed URL to Serve Private
 *             Content in the Amazon CloudFront Developer Guide. If you
 *             don't want to require signed URLs in requests for objects
 *             that match PathPattern, specify false for Enabled and 0 for
 *             Quantity. Omit Items. To add, change, or remove one or more
 *             trusted signers, change Enabled to true (if it's currently
 *             false), change Quantity as applicable, and specify all of
 *             the trusted signers that you want to include in the updated
 *             distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want to require end users to use signed URLs
 *               to access the files specified by PathPattern and
 *               TargetOriginId.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               trusted signers for this cache behavior.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains trusted signers for this cache
 *               behavior. If Quantity is 0, you can omit Items.
 *           * +Comment+ - (<tt>String</tt>) The comment
 *             originally specified when this distribution was created.
 *           * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *             distribution is enabled to accept end user requests for
 *             content.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateCloudFrontOriginAccessIdentity(params, callback)
 *   Calls the UpdateCloudFrontOriginAccessIdentity API operation.
 *   @param params [Object]
 *     * +CloudFrontOriginAccessIdentityConfig+ - (*required*,
 *       <tt>Object</tt>) The identity's configuration information.
 *       * +CallerReference+ - (*required*, <tt>String</tt>) A unique
 *         number that ensures the request can't be replayed. If the
 *         CallerReference is new (no matter the content of the
 *         CloudFrontOriginAccessIdentityConfig object), a new origin
 *         access identity is created. If the CallerReference is a value
 *         you already sent in a previous request to create an identity,
 *         and the content of the CloudFrontOriginAccessIdentityConfig is
 *         identical to the original request (ignoring white space), the
 *         response includes the same information returned to the
 *         original request. If the CallerReference is a value you
 *         already sent in a previous request to create an identity but
 *         the content of the CloudFrontOriginAccessIdentityConfig is
 *         different from the original request, CloudFront returns a
 *         CloudFrontOriginAccessIdentityAlreadyExists error.
 *       * +Comment+ - (*required*, <tt>String</tt>) Any comments you
 *         want to include about the origin access identity.
 *     * +Id+ - (<tt>String</tt>) The identity's id.
 *     * +IfMatch+ - (<tt>String</tt>) The value of the ETag header you
 *       received when retrieving the identity's configuration. For
 *       example: E2QWRUHAPOMQZL.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +CloudFrontOriginAccessIdentity+ - (<tt>Object</tt>) The origin
 *         access identity's information.
 *         * +Id+ - (<tt>String</tt>) The ID for the origin
 *           access identity. For example: E74FTE3AJFJ256A.
 *         * +S3CanonicalUserId+ - (<tt>String</tt>) The Amazon
 *           S3 canonical user ID for the origin access identity, which you
 *           use when giving the origin access identity read permission to
 *           an object in Amazon S3.
 *         * +CloudFrontOriginAccessIdentityConfig+ - (<tt>Object</tt>) The
 *           current configuration information for the identity.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             CloudFrontOriginAccessIdentityConfig object), a new origin
 *             access identity is created. If the CallerReference is a
 *             value you already sent in a previous request to create an
 *             identity, and the content of the
 *             CloudFrontOriginAccessIdentityConfig is identical to the
 *             original request (ignoring white space), the response
 *             includes the same information returned to the original
 *             request. If the CallerReference is a value you already sent
 *             in a previous request to create an identity but the content
 *             of the CloudFrontOriginAccessIdentityConfig is different
 *             from the original request, CloudFront returns a
 *             CloudFrontOriginAccessIdentityAlreadyExists error.
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the origin access identity.
 *       * +ETag+ - (<tt>String</tt>) The current version of the
 *         configuration. For example: E2QWRUHAPOMQZL.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateDistribution(params, callback)
 *   Calls the UpdateDistribution API operation.
 *   @param params [Object]
 *     * +DistributionConfig+ - (*required*, <tt>Object</tt>) The
 *       distribution's configuration information.
 *       * +CallerReference+ - (*required*, <tt>String</tt>) A unique
 *         number that ensures the request can't be replayed. If the
 *         CallerReference is new (no matter the content of the
 *         DistributionConfig object), a new distribution is created. If
 *         the CallerReference is a value you already sent in a previous
 *         request to create a distribution, and the content of the
 *         DistributionConfig is identical to the original request
 *         (ignoring white space), the response includes the same
 *         information returned to the original request. If the
 *         CallerReference is a value you already sent in a previous
 *         request to create a distribution but the content of the
 *         DistributionConfig is different from the original request,
 *         CloudFront returns a DistributionAlreadyExists error.
 *       * +Aliases+ - (*required*, <tt>Object</tt>) A complex type that
 *         contains information about CNAMEs (alternate domain names), if
 *         any, for this distribution.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           CNAMEs, if any, for this distribution.
 *         * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *           that contains CNAME elements, if any, for this distribution.
 *           If Quantity is 0, you can omit Items.
 *       * +DefaultRootObject+ - (*required*, <tt>String</tt>) The object
 *         that you want CloudFront to return (for example, index.html)
 *         when an end user requests the root URL for your distribution
 *         (http://www.example.com) instead of an object in your
 *         distribution (http://www.example.com/index.html). Specifying a
 *         default root object avoids exposing the contents of your
 *         distribution. If you don't want to specify a default root
 *         object when you create a distribution, include an empty
 *         DefaultRootObject element. To delete the default root object
 *         from an existing distribution, update the distribution
 *         configuration and include an empty DefaultRootObject element.
 *         To replace the default root object, update the distribution
 *         configuration and specify the new object.
 *       * +Origins+ - (*required*, <tt>Object</tt>) A complex type that
 *         contains information about origins for this distribution.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           origins for this distribution.
 *         * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *           contains origins for this distribution.
 *           * +Id+ - (*required*, <tt>String</tt>) A unique identifier
 *             for the origin. The value of Id must be unique within the
 *             distribution. You use the value of Id when you create a
 *             cache behavior. The Id identifies the origin that
 *             CloudFront routes a request to when the request matches
 *             the path pattern for that cache behavior.
 *           * +DomainName+ - (*required*, <tt>String</tt>) Amazon S3
 *             origins: The DNS name of the Amazon S3 bucket from which
 *             you want CloudFront to get objects for this origin, for
 *             example, myawsbucket.s3.amazonaws.com. Custom origins: The
 *             DNS domain name for the HTTP server from which you want
 *             CloudFront to get objects for this origin, for example,
 *             www.example.com.
 *           * +S3OriginConfig+ - (<tt>Object</tt>) A complex type that
 *             contains information about the Amazon S3 origin. If the
 *             origin is a custom origin, use the CustomOriginConfig
 *             element instead.
 *             * +OriginAccessIdentity+ - (*required*, <tt>String</tt>)
 *               The CloudFront origin access identity to associate with
 *               the origin. Use an origin access identity to configure
 *               the origin so that end users can only access objects in
 *               an Amazon S3 bucket through CloudFront. If you want end
 *               users to be able to access objects using either the
 *               CloudFront URL or the Amazon S3 URL, specify an empty
 *               OriginAccessIdentity element. To delete the origin
 *               access identity from an existing distribution, update
 *               the distribution configuration and include an empty
 *               OriginAccessIdentity element. To replace the origin
 *               access identity, update the distribution configuration
 *               and specify the new origin access identity.
 *           * +CustomOriginConfig+ - (<tt>Object</tt>) A complex type
 *             that contains information about a custom origin. If the
 *             origin is an Amazon S3 bucket, use the S3OriginConfig
 *             element instead.
 *             * +HTTPPort+ - (*required*, <tt>Integer</tt>) The HTTP
 *               port the custom origin listens on.
 *             * +HTTPSPort+ - (*required*, <tt>Integer</tt>) The HTTPS
 *               port the custom origin listens on.
 *             * +OriginProtocolPolicy+ - (*required*, <tt>String</tt>)
 *               The origin protocol policy to apply to your origin.
 *       * +DefaultCacheBehavior+ - (*required*, <tt>Object</tt>) A
 *         complex type that describes the default cache behavior if you
 *         do not specify a CacheBehavior element or if files don't match
 *         any of the values of PathPattern in CacheBehavior elements.You
 *         must create exactly one default cache behavior.
 *         * +TargetOriginId+ - (*required*, <tt>String</tt>) The value
 *           of ID for the origin that you want CloudFront to route
 *           requests to when a request matches the path pattern either
 *           for a cache behavior or for the default cache behavior.
 *         * +ForwardedValues+ - (*required*, <tt>Object</tt>) A complex
 *           type that specifies how CloudFront handles query strings.
 *           * +QueryString+ - (*required*, <tt>Boolean</tt>) Indicates
 *             whether you want CloudFront to forward query strings to
 *             the origin that is associated with this cache behavior. If
 *             so, specify true; if not, specify false.
 *         * +TrustedSigners+ - (*required*, <tt>Object</tt>) A complex
 *           type that specifies the AWS accounts, if any, that you want
 *           to allow to create signed URLs for private content. If you
 *           want to require signed URLs in requests for objects in the
 *           target origin that match the PathPattern for this cache
 *           behavior, specify true for Enabled, and specify the
 *           applicable values for Quantity and Items. For more
 *           information, go to Using a Signed URL to Serve Private
 *           Content in the Amazon CloudFront Developer Guide. If you
 *           don't want to require signed URLs in requests for objects
 *           that match PathPattern, specify false for Enabled and 0 for
 *           Quantity. Omit Items. To add, change, or remove one or more
 *           trusted signers, change Enabled to true (if it's currently
 *           false), change Quantity as applicable, and specify all of
 *           the trusted signers that you want to include in the updated
 *           distribution.
 *           * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies
 *             whether you want to require end users to use signed URLs
 *             to access the files specified by PathPattern and
 *             TargetOriginId.
 *           * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *             trusted signers for this cache behavior.
 *           * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *             type that contains trusted signers for this cache
 *             behavior. If Quantity is 0, you can omit Items.
 *         * +ViewerProtocolPolicy+ - (*required*, <tt>String</tt>) Use
 *           this element to specify the protocol that users can use to
 *           access the files in the origin specified by TargetOriginId
 *           when a request matches the path pattern in PathPattern. If
 *           you want CloudFront to allow end users to use any available
 *           protocol, specify allow-all. If you want CloudFront to
 *           require HTTPS, specify https.
 *         * +MinTTL+ - (*required*, <tt>Integer</tt>) The minimum amount
 *           of time that you want objects to stay in CloudFront caches
 *           before CloudFront queries your origin to see whether the
 *           object has been updated.You can specify a value from 0 to
 *           3,153,600,000 seconds (100 years).
 *       * +CacheBehaviors+ - (*required*, <tt>Object</tt>) A complex
 *         type that contains zero or more CacheBehavior elements.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           cache behaviors for this distribution.
 *         * +Items+ - (<tt>Array<Object></tt>) Optional: A complex type
 *           that contains cache behaviors for this distribution. If
 *           Quantity is 0, you can omit Items.
 *           * +PathPattern+ - (*required*, <tt>String</tt>) The pattern
 *             (for example, images/*.jpg) that specifies which requests
 *             you want this cache behavior to apply to. When CloudFront
 *             receives an end-user request, the requested path is
 *             compared with path patterns in the order in which cache
 *             behaviors are listed in the distribution. The path pattern
 *             for the default cache behavior is * and cannot be changed.
 *             If the request for an object does not match the path
 *             pattern for any cache behaviors, CloudFront applies the
 *             behavior in the default cache behavior.
 *           * +TargetOriginId+ - (*required*, <tt>String</tt>) The value
 *             of ID for the origin that you want CloudFront to route
 *             requests to when a request matches the path pattern either
 *             for a cache behavior or for the default cache behavior.
 *           * +ForwardedValues+ - (*required*, <tt>Object</tt>) A
 *             complex type that specifies how CloudFront handles query
 *             strings.
 *             * +QueryString+ - (*required*, <tt>Boolean</tt>) Indicates
 *               whether you want CloudFront to forward query strings to
 *               the origin that is associated with this cache behavior.
 *               If so, specify true; if not, specify false.
 *           * +TrustedSigners+ - (*required*, <tt>Object</tt>) A complex
 *             type that specifies the AWS accounts, if any, that you
 *             want to allow to create signed URLs for private content.
 *             If you want to require signed URLs in requests for objects
 *             in the target origin that match the PathPattern for this
 *             cache behavior, specify true for Enabled, and specify the
 *             applicable values for Quantity and Items. For more
 *             information, go to Using a Signed URL to Serve Private
 *             Content in the Amazon CloudFront Developer Guide. If you
 *             don't want to require signed URLs in requests for objects
 *             that match PathPattern, specify false for Enabled and 0
 *             for Quantity. Omit Items. To add, change, or remove one or
 *             more trusted signers, change Enabled to true (if it's
 *             currently false), change Quantity as applicable, and
 *             specify all of the trusted signers that you want to
 *             include in the updated distribution.
 *             * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies
 *               whether you want to require end users to use signed URLs
 *               to access the files specified by PathPattern and
 *               TargetOriginId.
 *             * +Quantity+ - (*required*, <tt>Integer</tt>) The number
 *               of trusted signers for this cache behavior.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains trusted signers for this cache
 *               behavior. If Quantity is 0, you can omit Items.
 *           * +ViewerProtocolPolicy+ - (*required*, <tt>String</tt>) Use
 *             this element to specify the protocol that users can use to
 *             access the files in the origin specified by TargetOriginId
 *             when a request matches the path pattern in PathPattern. If
 *             you want CloudFront to allow end users to use any
 *             available protocol, specify allow-all. If you want
 *             CloudFront to require HTTPS, specify https.
 *           * +MinTTL+ - (*required*, <tt>Integer</tt>) The minimum
 *             amount of time that you want objects to stay in CloudFront
 *             caches before CloudFront queries your origin to see
 *             whether the object has been updated.You can specify a
 *             value from 0 to 3,153,600,000 seconds (100 years).
 *       * +Comment+ - (*required*, <tt>String</tt>) Any comments you
 *         want to include about the distribution.
 *       * +Logging+ - (*required*, <tt>Object</tt>) A complex type that
 *         controls whether access logs are written for the distribution.
 *         * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies whether
 *           you want CloudFront to save access logs to an Amazon S3
 *           bucket. If you do not want to enable logging when you create
 *           a distribution or if you want to disable logging for an
 *           existing distribution, specify false for Enabled, and
 *           specify empty Bucket and Prefix elements. If you specify
 *           false for Enabled but you specify values for Bucket and
 *           Prefix, the values are automatically deleted.
 *         * +Bucket+ - (*required*, <tt>String</tt>) The Amazon S3
 *           bucket to store the access logs in, for example,
 *           myawslogbucket.s3.amazonaws.com.
 *         * +Prefix+ - (*required*, <tt>String</tt>) An optional string
 *           that you want CloudFront to prefix to the access log
 *           filenames for this distribution, for example, myprefix/. If
 *           you want to enable logging, but you do not want to specify a
 *           prefix, you still must include an empty Prefix element in
 *           the Logging element.
 *       * +Enabled+ - (*required*, <tt>Boolean</tt>) Whether the
 *         distribution is enabled to accept end user requests for
 *         content.
 *     * +Id+ - (<tt>String</tt>) The distribution's id.
 *     * +IfMatch+ - (<tt>String</tt>) The value of the ETag header you
 *       received when retrieving the distribution's configuration. For
 *       example: E2QWRUHAPOMQZL.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +Distribution+ - (<tt>Object</tt>) The distribution's
 *         information.
 *         * +Id+ - (<tt>String</tt>) The identifier for the
 *           distribution. For example: EDFDVBD632BHDS5.
 *         * +Status+ - (<tt>String</tt>) This response element
 *           indicates the current status of the distribution. When the
 *           status is Deployed, the distribution's information is fully
 *           propagated throughout the Amazon CloudFront system.
 *         * +LastModifiedTime+ - (<tt>Date</tt>) The date and
 *           time the distribution was last modified.
 *         * +InProgressInvalidationBatches+ - (*required*,
 *           <tt>Integer</tt>) The number of invalidation batches currently
 *           in progress.
 *         * +DomainName+ - (<tt>String</tt>) The domain name
 *           corresponding to the distribution. For example:
 *           d604721fxaaqy9.cloudfront.net.
 *         * +ActiveTrustedSigners+ - (<tt>Object</tt>)
 *           CloudFront automatically adds this element to the response
 *           only if you've set up the distribution to serve private
 *           content with signed URLs. The element lists the key pair IDs
 *           that CloudFront is aware of for each trusted signer. The
 *           Signer child element lists the AWS account number of the
 *           trusted signer (or an empty Self element if the signer is
 *           you). The Signer element also includes the IDs of any active
 *           key pairs associated with the trusted signer's AWS account. If
 *           no KeyPairId element appears for a Signer, that signer can't
 *           create working signed URLs.
 *           * +Enabled+ - (<tt>Boolean</tt>) Each active
 *             trusted signer.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             unique trusted signers included in all cache behaviors. For
 *             example, if three cache behaviors all list the same three
 *             AWS accounts, the value of Quantity for ActiveTrustedSigners
 *             will be 3.
 *           * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *             contains one Signer complex type for each unique trusted
 *             signer that is specified in the TrustedSigners complex type,
 *             including trusted signers in the default cache behavior and
 *             in all of the other cache behaviors.
 *             * +AwsAccountNumber+ - (<tt>String</tt>) Specifies an AWS
 *               account that can create signed URLs. Values: self, which
 *               indicates that the AWS account that was used to create the
 *               distribution can created signed URLs, or an AWS account
 *               number. Omit the dashes in the account number.
 *             * +KeyPairIds+ - (<tt>Object</tt>) A complex type that lists
 *               the active CloudFront key pairs, if any, that are
 *               associated with AwsAccountNumber.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of active CloudFront key pairs for AwsAccountNumber.
 *               * +Items+ - (<tt>Array<String></tt>) A complex type that
 *                 lists the active CloudFront key pairs, if any, that are
 *                 associated with AwsAccountNumber.
 *         * +DistributionConfig+ - (<tt>Object</tt>) The
 *           current configuration information for the distribution.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             DistributionConfig object), a new distribution is created.
 *             If the CallerReference is a value you already sent in a
 *             previous request to create a distribution, and the content
 *             of the DistributionConfig is identical to the original
 *             request (ignoring white space), the response includes the
 *             same information returned to the original request. If the
 *             CallerReference is a value you already sent in a previous
 *             request to create a distribution but the content of the
 *             DistributionConfig is different from the original request,
 *             CloudFront returns a DistributionAlreadyExists error.
 *           * +Aliases+ - (<tt>Object</tt>) A complex type
 *             that contains information about CNAMEs (alternate domain
 *             names), if any, for this distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               CNAMEs, if any, for this distribution.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains CNAME elements, if any, for this
 *               distribution. If Quantity is 0, you can omit Items.
 *           * +DefaultRootObject+ - (<tt>String</tt>) The
 *             object that you want CloudFront to return (for example,
 *             index.html) when an end user requests the root URL for your
 *             distribution (http://www.example.com) instead of an object
 *             in your distribution (http://www.example.com/index.html).
 *             Specifying a default root object avoids exposing the
 *             contents of your distribution. If you don't want to specify
 *             a default root object when you create a distribution,
 *             include an empty DefaultRootObject element. To delete the
 *             default root object from an existing distribution, update
 *             the distribution configuration and include an empty
 *             DefaultRootObject element. To replace the default root
 *             object, update the distribution configuration and specify
 *             the new object.
 *           * +Origins+ - (<tt>Object</tt>) A complex type
 *             that contains information about origins for this
 *             distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               origins for this distribution.
 *             * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *               contains origins for this distribution.
 *               * +Id+ - (<tt>String</tt>) A unique identifier
 *                 for the origin. The value of Id must be unique within
 *                 the distribution. You use the value of Id when you
 *                 create a cache behavior. The Id identifies the origin
 *                 that CloudFront routes a request to when the request
 *                 matches the path pattern for that cache behavior.
 *               * +DomainName+ - (<tt>String</tt>) Amazon S3
 *                 origins: The DNS name of the Amazon S3 bucket from which
 *                 you want CloudFront to get objects for this origin, for
 *                 example, myawsbucket.s3.amazonaws.com. Custom origins:
 *                 The DNS domain name for the HTTP server from which you
 *                 want CloudFront to get objects for this origin, for
 *                 example, www.example.com.
 *               * +S3OriginConfig+ - (<tt>Object</tt>) A complex type that
 *                 contains information about the Amazon S3 origin. If the
 *                 origin is a custom origin, use the CustomOriginConfig
 *                 element instead.
 *                 * +OriginAccessIdentity+ - (<tt>String</tt>)
 *                   The CloudFront origin access identity to associate
 *                   with the origin. Use an origin access identity to
 *                   configure the origin so that end users can only access
 *                   objects in an Amazon S3 bucket through CloudFront. If
 *                   you want end users to be able to access objects using
 *                   either the CloudFront URL or the Amazon S3 URL,
 *                   specify an empty OriginAccessIdentity element. To
 *                   delete the origin access identity from an existing
 *                   distribution, update the distribution configuration
 *                   and include an empty OriginAccessIdentity element. To
 *                   replace the origin access identity, update the
 *                   distribution configuration and specify the new origin
 *                   access identity.
 *               * +CustomOriginConfig+ - (<tt>Object</tt>) A complex type
 *                 that contains information about a custom origin. If the
 *                 origin is an Amazon S3 bucket, use the S3OriginConfig
 *                 element instead.
 *                 * +HTTPPort+ - (<tt>Integer</tt>) The HTTP
 *                   port the custom origin listens on.
 *                 * +HTTPSPort+ - (<tt>Integer</tt>) The HTTPS
 *                   port the custom origin listens on.
 *                 * +OriginProtocolPolicy+ - (<tt>String</tt>)
 *                   The origin protocol policy to apply to your origin.
 *           * +DefaultCacheBehavior+ - (<tt>Object</tt>) A
 *             complex type that describes the default cache behavior if
 *             you do not specify a CacheBehavior element or if files don't
 *             match any of the values of PathPattern in CacheBehavior
 *             elements.You must create exactly one default cache behavior.
 *             * +TargetOriginId+ - (<tt>String</tt>) The value
 *               of ID for the origin that you want CloudFront to route
 *               requests to when a request matches the path pattern either
 *               for a cache behavior or for the default cache behavior.
 *             * +ForwardedValues+ - (<tt>Object</tt>) A
 *               complex type that specifies how CloudFront handles query
 *               strings.
 *               * +QueryString+ - (<tt>Boolean</tt>) Indicates
 *                 whether you want CloudFront to forward query strings to
 *                 the origin that is associated with this cache behavior.
 *                 If so, specify true; if not, specify false.
 *             * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *               type that specifies the AWS accounts, if any, that you
 *               want to allow to create signed URLs for private content.
 *               If you want to require signed URLs in requests for objects
 *               in the target origin that match the PathPattern for this
 *               cache behavior, specify true for Enabled, and specify the
 *               applicable values for Quantity and Items. For more
 *               information, go to Using a Signed URL to Serve Private
 *               Content in the Amazon CloudFront Developer Guide. If you
 *               don't want to require signed URLs in requests for objects
 *               that match PathPattern, specify false for Enabled and 0
 *               for Quantity. Omit Items. To add, change, or remove one or
 *               more trusted signers, change Enabled to true (if it's
 *               currently false), change Quantity as applicable, and
 *               specify all of the trusted signers that you want to
 *               include in the updated distribution.
 *               * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                 whether you want to require end users to use signed URLs
 *                 to access the files specified by PathPattern and
 *                 TargetOriginId.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of trusted signers for this cache behavior.
 *               * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                 type that contains trusted signers for this cache
 *                 behavior. If Quantity is 0, you can omit Items.
 *             * +ViewerProtocolPolicy+ - (<tt>String</tt>) Use
 *               this element to specify the protocol that users can use to
 *               access the files in the origin specified by TargetOriginId
 *               when a request matches the path pattern in PathPattern. If
 *               you want CloudFront to allow end users to use any
 *               available protocol, specify allow-all. If you want
 *               CloudFront to require HTTPS, specify https.
 *             * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *               amount of time that you want objects to stay in CloudFront
 *               caches before CloudFront queries your origin to see
 *               whether the object has been updated.You can specify a
 *               value from 0 to 3,153,600,000 seconds (100 years).
 *           * +CacheBehaviors+ - (<tt>Object</tt>) A complex
 *             type that contains zero or more CacheBehavior elements.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               cache behaviors for this distribution.
 *             * +Items+ - (<tt>Array<Object></tt>) Optional: A complex
 *               type that contains cache behaviors for this distribution.
 *               If Quantity is 0, you can omit Items.
 *               * +PathPattern+ - (<tt>String</tt>) The
 *                 pattern (for example, images/*.jpg) that specifies which
 *                 requests you want this cache behavior to apply to. When
 *                 CloudFront receives an end-user request, the requested
 *                 path is compared with path patterns in the order in
 *                 which cache behaviors are listed in the distribution.
 *                 The path pattern for the default cache behavior is * and
 *                 cannot be changed. If the request for an object does not
 *                 match the path pattern for any cache behaviors,
 *                 CloudFront applies the behavior in the default cache
 *                 behavior.
 *               * +TargetOriginId+ - (<tt>String</tt>) The
 *                 value of ID for the origin that you want CloudFront to
 *                 route requests to when a request matches the path
 *                 pattern either for a cache behavior or for the default
 *                 cache behavior.
 *               * +ForwardedValues+ - (<tt>Object</tt>) A
 *                 complex type that specifies how CloudFront handles query
 *                 strings.
 *                 * +QueryString+ - (<tt>Boolean</tt>)
 *                   Indicates whether you want CloudFront to forward query
 *                   strings to the origin that is associated with this
 *                   cache behavior. If so, specify true; if not, specify
 *                   false.
 *               * +TrustedSigners+ - (<tt>Object</tt>) A
 *                 complex type that specifies the AWS accounts, if any,
 *                 that you want to allow to create signed URLs for private
 *                 content. If you want to require signed URLs in requests
 *                 for objects in the target origin that match the
 *                 PathPattern for this cache behavior, specify true for
 *                 Enabled, and specify the applicable values for Quantity
 *                 and Items. For more information, go to Using a Signed
 *                 URL to Serve Private Content in the Amazon CloudFront
 *                 Developer Guide. If you don't want to require signed
 *                 URLs in requests for objects that match PathPattern,
 *                 specify false for Enabled and 0 for Quantity. Omit
 *                 Items. To add, change, or remove one or more trusted
 *                 signers, change Enabled to true (if it's currently
 *                 false), change Quantity as applicable, and specify all
 *                 of the trusted signers that you want to include in the
 *                 updated distribution.
 *                 * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *                   whether you want to require end users to use signed
 *                   URLs to access the files specified by PathPattern and
 *                   TargetOriginId.
 *                 * +Quantity+ - (<tt>Integer</tt>) The number
 *                   of trusted signers for this cache behavior.
 *                 * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *                   type that contains trusted signers for this cache
 *                   behavior. If Quantity is 0, you can omit Items.
 *               * +ViewerProtocolPolicy+ - (<tt>String</tt>)
 *                 Use this element to specify the protocol that users can
 *                 use to access the files in the origin specified by
 *                 TargetOriginId when a request matches the path pattern
 *                 in PathPattern. If you want CloudFront to allow end
 *                 users to use any available protocol, specify allow-all.
 *                 If you want CloudFront to require HTTPS, specify https.
 *               * +MinTTL+ - (<tt>Integer</tt>) The minimum
 *                 amount of time that you want objects to stay in
 *                 CloudFront caches before CloudFront queries your origin
 *                 to see whether the object has been updated.You can
 *                 specify a value from 0 to 3,153,600,000 seconds (100
 *                 years).
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the distribution.
 *           * +Logging+ - (<tt>Object</tt>) A complex type
 *             that controls whether access logs are written for the
 *             distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want CloudFront to save access logs to an
 *               Amazon S3 bucket. If you do not want to enable logging
 *               when you create a distribution or if you want to disable
 *               logging for an existing distribution, specify false for
 *               Enabled, and specify empty Bucket and Prefix elements. If
 *               you specify false for Enabled but you specify values for
 *               Bucket and Prefix, the values are automatically deleted.
 *             * +Bucket+ - (<tt>String</tt>) The Amazon S3
 *               bucket to store the access logs in, for example,
 *               myawslogbucket.s3.amazonaws.com.
 *             * +Prefix+ - (<tt>String</tt>) An optional
 *               string that you want CloudFront to prefix to the access
 *               log filenames for this distribution, for example,
 *               myprefix/. If you want to enable logging, but you do not
 *               want to specify a prefix, you still must include an empty
 *               Prefix element in the Logging element.
 *           * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *             distribution is enabled to accept end user requests for
 *             content.
 *       * +ETag+ - (<tt>String</tt>) The current version of the
 *         configuration. For example: E2QWRUHAPOMQZL.
 *   @return [AWS.Request] a handle to the operation request for
 *     subsequent event callback registration.
 *
 * @!method updateStreamingDistribution(params, callback)
 *   Calls the UpdateStreamingDistribution API operation.
 *   @param params [Object]
 *     * +StreamingDistributionConfig+ - (*required*, <tt>Object</tt>)
 *       The streaming distribution's configuration information.
 *       * +CallerReference+ - (*required*, <tt>String</tt>) A unique
 *         number that ensures the request can't be replayed. If the
 *         CallerReference is new (no matter the content of the
 *         StreamingDistributionConfig object), a new streaming
 *         distribution is created. If the CallerReference is a value you
 *         already sent in a previous request to create a streaming
 *         distribution, and the content of the
 *         StreamingDistributionConfig is identical to the original
 *         request (ignoring white space), the response includes the same
 *         information returned to the original request. If the
 *         CallerReference is a value you already sent in a previous
 *         request to create a streaming distribution but the content of
 *         the StreamingDistributionConfig is different from the original
 *         request, CloudFront returns a DistributionAlreadyExists error.
 *       * +S3Origin+ - (*required*, <tt>Object</tt>) A complex type that
 *         contains information about the Amazon S3 bucket from which you
 *         want CloudFront to get your media files for distribution.
 *         * +DomainName+ - (*required*, <tt>String</tt>) The DNS name of
 *           the S3 origin.
 *         * +OriginAccessIdentity+ - (*required*, <tt>String</tt>) Your
 *           S3 origin's origin access identity.
 *       * +Aliases+ - (*required*, <tt>Object</tt>) A complex type that
 *         contains information about CNAMEs (alternate domain names), if
 *         any, for this streaming distribution.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           CNAMEs, if any, for this distribution.
 *         * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *           that contains CNAME elements, if any, for this distribution.
 *           If Quantity is 0, you can omit Items.
 *       * +Comment+ - (*required*, <tt>String</tt>) Any comments you
 *         want to include about the streaming distribution.
 *       * +Logging+ - (*required*, <tt>Object</tt>) A complex type that
 *         controls whether access logs are written for the streaming
 *         distribution.
 *         * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies whether
 *           you want CloudFront to save access logs to an Amazon S3
 *           bucket. If you do not want to enable logging when you create
 *           a distribution or if you want to disable logging for an
 *           existing distribution, specify false for Enabled, and
 *           specify empty Bucket and Prefix elements. If you specify
 *           false for Enabled but you specify values for Bucket and
 *           Prefix, the values are automatically deleted.
 *         * +Bucket+ - (*required*, <tt>String</tt>) The Amazon S3
 *           bucket to store the access logs in, for example,
 *           myawslogbucket.s3.amazonaws.com.
 *         * +Prefix+ - (*required*, <tt>String</tt>) An optional string
 *           that you want CloudFront to prefix to the access log
 *           filenames for this distribution, for example, myprefix/. If
 *           you want to enable logging, but you do not want to specify a
 *           prefix, you still must include an empty Prefix element in
 *           the Logging element.
 *       * +TrustedSigners+ - (*required*, <tt>Object</tt>) A complex
 *         type that specifies the AWS accounts, if any, that you want to
 *         allow to create signed URLs for private content. If you want
 *         to require signed URLs in requests for objects in the target
 *         origin that match the PathPattern for this cache behavior,
 *         specify true for Enabled, and specify the applicable values
 *         for Quantity and Items. For more information, go to Using a
 *         Signed URL to Serve Private Content in the Amazon CloudFront
 *         Developer Guide. If you don't want to require signed URLs in
 *         requests for objects that match PathPattern, specify false for
 *         Enabled and 0 for Quantity. Omit Items. To add, change, or
 *         remove one or more trusted signers, change Enabled to true (if
 *         it's currently false), change Quantity as applicable, and
 *         specify all of the trusted signers that you want to include in
 *         the updated distribution.
 *         * +Enabled+ - (*required*, <tt>Boolean</tt>) Specifies whether
 *           you want to require end users to use signed URLs to access
 *           the files specified by PathPattern and TargetOriginId.
 *         * +Quantity+ - (*required*, <tt>Integer</tt>) The number of
 *           trusted signers for this cache behavior.
 *         * +Items+ - (<tt>Array<String></tt>) Optional: A complex type
 *           that contains trusted signers for this cache behavior. If
 *           Quantity is 0, you can omit Items.
 *       * +Enabled+ - (*required*, <tt>Boolean</tt>) Whether the
 *         streaming distribution is enabled to accept end user requests
 *         for content.
 *     * +Id+ - (<tt>String</tt>) The streaming distribution's id.
 *     * +IfMatch+ - (<tt>String</tt>) The value of the ETag header you
 *       received when retrieving the streaming distribution's
 *       configuration. For example: E2QWRUHAPOMQZL.
 *   @callback callback function(err, data)
 *     Called when a response from the service is returned. If a
 *     callback is not supplied, you must call {AWS.Request.send}
 *     on the returned request object to initiate the request.
 *     @param err [Object] the error object returned from the request.
 *       Set to +null+ if the request is successful.
 *     @param data [Object] the de-serialized data returned from
 *       the request. Set to +null+ if a request error occurs.
 *       The +data+ object has the following properties:
 *       * +StreamingDistribution+ - (<tt>Object</tt>) The streaming
 *         distribution's information.
 *         * +Id+ - (<tt>String</tt>) The identifier for the
 *           streaming distribution. For example: EGTXBD79H29TRA8.
 *         * +Status+ - (<tt>String</tt>) The current status of
 *           the streaming distribution. When the status is Deployed, the
 *           distribution's information is fully propagated throughout the
 *           Amazon CloudFront system.
 *         * +LastModifiedTime+ - (<tt>Date</tt>) The date and time the
 *           distribution was last modified.
 *         * +DomainName+ - (<tt>String</tt>) The domain name
 *           corresponding to the streaming distribution. For example:
 *           s5c39gqb8ow64r.cloudfront.net.
 *         * +ActiveTrustedSigners+ - (<tt>Object</tt>)
 *           CloudFront automatically adds this element to the response
 *           only if you've set up the distribution to serve private
 *           content with signed URLs. The element lists the key pair IDs
 *           that CloudFront is aware of for each trusted signer. The
 *           Signer child element lists the AWS account number of the
 *           trusted signer (or an empty Self element if the signer is
 *           you). The Signer element also includes the IDs of any active
 *           key pairs associated with the trusted signer's AWS account. If
 *           no KeyPairId element appears for a Signer, that signer can't
 *           create working signed URLs.
 *           * +Enabled+ - (<tt>Boolean</tt>) Each active
 *             trusted signer.
 *           * +Quantity+ - (<tt>Integer</tt>) The number of
 *             unique trusted signers included in all cache behaviors. For
 *             example, if three cache behaviors all list the same three
 *             AWS accounts, the value of Quantity for ActiveTrustedSigners
 *             will be 3.
 *           * +Items+ - (<tt>Array<Object></tt>) A complex type that
 *             contains one Signer complex type for each unique trusted
 *             signer that is specified in the TrustedSigners complex type,
 *             including trusted signers in the default cache behavior and
 *             in all of the other cache behaviors.
 *             * +AwsAccountNumber+ - (<tt>String</tt>) Specifies an AWS
 *               account that can create signed URLs. Values: self, which
 *               indicates that the AWS account that was used to create the
 *               distribution can created signed URLs, or an AWS account
 *               number. Omit the dashes in the account number.
 *             * +KeyPairIds+ - (<tt>Object</tt>) A complex type that lists
 *               the active CloudFront key pairs, if any, that are
 *               associated with AwsAccountNumber.
 *               * +Quantity+ - (<tt>Integer</tt>) The number
 *                 of active CloudFront key pairs for AwsAccountNumber.
 *               * +Items+ - (<tt>Array<String></tt>) A complex type that
 *                 lists the active CloudFront key pairs, if any, that are
 *                 associated with AwsAccountNumber.
 *         * +StreamingDistributionConfig+ - (<tt>Object</tt>)
 *           The current configuration information for the streaming
 *           distribution.
 *           * +CallerReference+ - (<tt>String</tt>) A unique
 *             number that ensures the request can't be replayed. If the
 *             CallerReference is new (no matter the content of the
 *             StreamingDistributionConfig object), a new streaming
 *             distribution is created. If the CallerReference is a value
 *             you already sent in a previous request to create a streaming
 *             distribution, and the content of the
 *             StreamingDistributionConfig is identical to the original
 *             request (ignoring white space), the response includes the
 *             same information returned to the original request. If the
 *             CallerReference is a value you already sent in a previous
 *             request to create a streaming distribution but the content
 *             of the StreamingDistributionConfig is different from the
 *             original request, CloudFront returns a
 *             DistributionAlreadyExists error.
 *           * +S3Origin+ - (<tt>Object</tt>) A complex type
 *             that contains information about the Amazon S3 bucket from
 *             which you want CloudFront to get your media files for
 *             distribution.
 *             * +DomainName+ - (<tt>String</tt>) The DNS name
 *               of the S3 origin.
 *             * +OriginAccessIdentity+ - (<tt>String</tt>)
 *               Your S3 origin's origin access identity.
 *           * +Aliases+ - (<tt>Object</tt>) A complex type
 *             that contains information about CNAMEs (alternate domain
 *             names), if any, for this streaming distribution.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               CNAMEs, if any, for this distribution.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains CNAME elements, if any, for this
 *               distribution. If Quantity is 0, you can omit Items.
 *           * +Comment+ - (<tt>String</tt>) Any comments you
 *             want to include about the streaming distribution.
 *           * +Logging+ - (<tt>Object</tt>) A complex type
 *             that controls whether access logs are written for the
 *             streaming distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want CloudFront to save access logs to an
 *               Amazon S3 bucket. If you do not want to enable logging
 *               when you create a distribution or if you want to disable
 *               logging for an existing distribution, specify false for
 *               Enabled, and specify empty Bucket and Prefix elements. If
 *               you specify false for Enabled but you specify values for
 *               Bucket and Prefix, the values are automatically deleted.
 *             * +Bucket+ - (<tt>String</tt>) The Amazon S3
 *               bucket to store the access logs in, for example,
 *               myawslogbucket.s3.amazonaws.com.
 *             * +Prefix+ - (<tt>String</tt>) An optional
 *               string that you want CloudFront to prefix to the access
 *               log filenames for this distribution, for example,
 *               myprefix/. If you want to enable logging, but you do not
 *               want to specify a prefix, you still must include an empty
 *               Prefix element in the Logging element.
 *           * +TrustedSigners+ - (<tt>Object</tt>) A complex
 *             type that specifies the AWS accounts, if any, that you want
 *             to allow to create signed URLs for private content. If you
 *             want to require signed URLs in requests for objects in the
 *             target origin that match the PathPattern for this cache
 *             behavior, specify true for Enabled, and specify the
 *             applicable values for Quantity and Items. For more
 *             information, go to Using a Signed URL to Serve Private
 *             Content in the Amazon CloudFront Developer Guide. If you
 *             don't want to require signed URLs in requests for objects
 *             that match PathPattern, specify false for Enabled and 0 for
 *             Quantity. Omit Items. To add, change, or remove one or more
 *             trusted signers, change Enabled to true (if it's currently
 *             false), change Quantity as applicable, and specify all of
 *             the trusted signers that you want to include in the updated
 *             distribution.
 *             * +Enabled+ - (<tt>Boolean</tt>) Specifies
 *               whether you want to require end users to use signed URLs
 *               to access the files specified by PathPattern and
 *               TargetOriginId.
 *             * +Quantity+ - (<tt>Integer</tt>) The number of
 *               trusted signers for this cache behavior.
 *             * +Items+ - (<tt>Array<String></tt>) Optional: A complex
 *               type that contains trusted signers for this cache
 *               behavior. If Quantity is 0, you can omit Items.
 *           * +Enabled+ - (<tt>Boolean</tt>) Whether the
 *             streaming distribution is enabled to accept end user
 *             requests for content.
 *       * +ETag+ - (<tt>String</tt>) The current version of the
 *         configuration. For example: E2QWRUHAPOMQZL.
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
AWS.CloudFront.Client = inherit({});
