# coding=utf-8
#####################################################
# THIS FILE IS AUTOMATICALLY GENERATED. DO NOT EDIT #
#####################################################
# noqa: E128,E201
from .asyncclient import AsyncBaseClient
from .asyncclient import createApiClient
from .asyncclient import config
from .asyncclient import createTemporaryCredentials
from .asyncclient import createSession
_defaultConfig = config


class TreeherderEvents(AsyncBaseClient):
    """
    The taskcluster-treeherder service is responsible for processing
    task events published by TaskCluster Queue and producing job messages
    that are consumable by Treeherder.

    This exchange provides that job messages to be consumed by any queue that
    attached to the exchange.  This could be a production Treeheder instance,
    a local development environment, or a custom dashboard.
    """

    classOptions = {
        "exchangePrefix": "exchange/taskcluster-treeherder/v1/",
    }
    serviceName = 'treeherder'
    apiVersion = 'v1'

    def jobs(self, *args, **kwargs):
        """
        Job Messages

        When a task run is scheduled or resolved, a message is posted to
        this exchange in a Treeherder consumable format.

        This exchange outputs: ``v1/pulse-job.json#``This exchange takes the following keys:

         * destination: destination (required)

         * project: project (required)

         * reserved: Space reserved for future routing-key entries, you should always match this entry with `#`. As automatically done by our tooling, if not specified.
        """

        ref = {
            'exchange': 'jobs',
            'name': 'jobs',
            'routingKey': [
                {
                    'multipleWords': False,
                    'name': 'destination',
                },
                {
                    'multipleWords': False,
                    'name': 'project',
                },
                {
                    'multipleWords': True,
                    'name': 'reserved',
                },
            ],
            'schema': 'v1/pulse-job.json#',
        }
        return self._makeTopicExchange(ref, *args, **kwargs)

    funcinfo = {
    }


__all__ = ['createTemporaryCredentials', 'config', '_defaultConfig', 'createApiClient', 'createSession', 'TreeherderEvents']
